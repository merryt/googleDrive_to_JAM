# drive_to_jam

the goal of this experiment is to take google drive items and convert them to a blog


## To rip files from Google Drive:
- Go to google drive API and generate your credentials.json and save them to getDataFromDrive
- navigate to getDataFromDrive.
- change your target folder in pull_posts.py to something in your personal google drive.
- run pull_posts.py (if its your first time create a virtual env and pip install requirements)
This will create a new folder in the projects root called markdown... we will need this later


## to run vuepress server
- `yarn global add vuepress # OR npm install -g vuepress`
- `yarn dev` OR `npm run dev` (this will run local dev)
- `yarn build` OR `npm run build` (this will generate static assets )
For help check out [vue press](https://vuepress.vuejs.org/guide/getting-started.html)


## Run local web server to see vuepress files after static generation
- `python python_server`
- Browse to `http://localhost:8000`
- Ctrl-C to Quit...on windows have to quit to regenerate static files because of lame directory locking
