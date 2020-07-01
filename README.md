# drive_to_jam

the goal of this experiment is to take google drive items and convert them to a blog


## To rip files from Google Drive:
- Go to google drive API and generate your credentials.json and save them to getDataFromDrive
- Setup your config.json to include your target folder
- If this is your first time  pip install requirements and download [pandoc](http://pandoc.org/installing.html)
- `yarn pullfiles` will pull down all the files from your config.json
This will create new folders in the projects root called markdown and docx, which we use for vuepress


## to run vuepress server
- `yarn global add vuepress # OR npm install -g vuepress`
- `yarn dev` OR `npm run dev` (this will run local dev)
- `yarn build` OR `npm run build` (this will generate static assets )
For help check out [vue press](https://vuepress.vuejs.org/guide/getting-started.html)


## Run local web server to see vuepress files after static generation
- `python python_server`
- Browse to `http://localhost:8000`
- Ctrl-C to Quit...on windows have to quit to regenerate static files because of lame directory locking
