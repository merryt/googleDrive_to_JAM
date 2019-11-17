/*

GOAL OF THIS FILE
- Build a site map for all the files on the blog.

*/

//requiring path and fs modules
const path = require('path');
const fs = require('fs');



retreiveFileNamesFromFolder = function(targetFolder, callback){

    const directoryPath = path.join(__dirname, targetFolder);
    let arrayOfFiles = []

    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            callback(err)
        }
        callback(null, files)
    });
}


convertFileExtensionToHTML = function(fileName){
    HMTLString = fileName.toString().replace(/\..*/gim, ".html")
    return 'https://tymerry.com/' + HMTLString
}

saveSitemap = function(arrayOfHTMLFiles){


    const directoryPath = path.join(__dirname, "./markdown/.vuepress/public/sitemap.txt");
    fs.writeFile(directoryPath, arrayOfHTMLFiles.reduce((accumulator, currentValue)=>{
        return accumulator + "\n" + currentValue
    }), function(err) {

    if(err) {
        return console.log(err);
    }

    console.log("The sitemap was saved!");
});
    /* if succsess return true, else return false */
}


retreiveFileNamesFromFolder("./markdown/", function (err, content) {
    saveSitemap(content.filter((file)=>{
        return file.charAt(0) != "."
    }).map((file)=>{
        return convertFileExtensionToHTML(file)
    }))

})
