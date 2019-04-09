const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const config = require('config.json')('./config.json');
const nodePandoc = require('node-pandoc');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/documents.readonly', 'https://www.googleapis.com/auth/drive.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), grabFiles);

});

function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}


function listFiles(auth) {
    return new Promise(function(resolve, reject){
        const drive = google.drive({version: 'v3', auth});
        return drive.files.list({
            pageSize: 50,
            q: `'${config.publishedFolderID}' in parents`,
            fields: 'nextPageToken, files(id, name)',
        }, (err, res) => {
            if (err) return console.log('The API returned an error: ' + err);
            const files = res.data.files;
            if (files.length) {
                resolve(files)
            } else {
                reject(Error("ikes, we didn't find anything"))
            }
        });
    })
}


function writeStream(slugifiedFileName){
    const filePath = slugifiedFileName;
    return fs.createWriteStream(filePath, {
        encoding: 'utf-8'
    });
}


function grabFiles(auth){
    const drive = google.drive({version: 'v3', auth});
    listFiles(auth).then((files) =>{
        let promises = []
        files.forEach((file, index) =>{
            let promise = new Promise((resolve, reject)=>{
                const slugifiedName = slugify(file.name)
                const slugifiedFileName = `docx/${slugifiedName}.docx`
                file.slugifiedFileName = slugifiedFileName
                drive.files.export({
                    fileId: file.id,
                    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                },{responseType: 'stream'}, function(err, res){
                    res.data
                       .on('end', () => {
                           resolve("done")
                           console.log(`Finished writing ${file.name}`);
                       })
                       .on('error', err => {
                           reject(err)
                           console.log('Error', err);
                       }).pipe(writeStream(slugifiedFileName));

                });
            })
            promises.push(promise)
        });
        Promise.all(promises)
               .then(() => convertToMarkdown(files))
               .catch((e) => console.error('crap, not everything finished downloading or something... idk'));
    })
}


function convertToMarkdown(files){
    console.log(files)
    files.forEach((file)=>{
        let src = file.slugifiedFileName;
        let slugifiedName = slugify(file.name)
        args = ['-f','docx','-t','markdown','-o',`./markdown/${slugifiedName}.md`];
        const callback = (err, result)=> {

            if (err) console.error('Oh Nos: ',err)
            return console.log(result), result
        }

        // Call pandoc
        nodePandoc(src, args, callback);
    })

}

function slugify(text){
    return text.toString().toLowerCase()
               .replace(/\s+/g, '-')           // Replace spaces with -
               .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
               .replace(/\-\-+/g, '-')         // Replace multiple - with single -
               .replace(/^-+/, '')             // Trim - from start of text
               .replace(/-+$/, '');            // Trim - from end of text
}

/* dunder drama we may need again */
/*
 * def export_docx_file_to_markdown(document):
 *     title = document.get('title')
 *     with open(f"../docx/{slugify(title)}.docx", "rb") as docx_file:
 *         result = mammoth.convert_to_markdown(docx_file)
 *         fixed_md = result.value
 *         fixed_md = re.sub(r"([\w:$-]?)([ \t]*?)__([ \t]*?)([\w:$]+?[\w \t]*?[\w:$,;]+?)([ \t]*?)__([ \t\\-]*?)([\w:$]+?)", r"\1\2\3__\4__\5\6\7", fixed_md)
 *         fixed_md = re.sub(r"([\w:$-]?)([ \t]*?)\*\*([ \t]*?)([\w:$]+?[\w \t]*?[\w:$,;]+?)([ \t]*?)\*\*([ \t\\-]*?)([\w:$]+?)", r"\1\2\3**\4**\5\6\7", fixed_md)
 *         fixed_md = re.sub(r"([\w:$-]?)([ \t]*?)\*([ \t]*?)([\w:$]+?[\w \t]*?[\w:$,;]+?)([ \t]*?)\*([ \t\\-]*?)([\w:$]+?)", r"\1\2\3*\4*\5\6\7", fixed_md)
 *         fixed_md = re.sub(r"\\-\\-\\-", "---", fixed_md)
 *         with open(f"../markdown/{slugify(title)}.md", "w") as file:
 *             file.write(fixed_md) */
