# staticSiteWithGulpTemplate

ES6, SASS, Live Reloading

This package will live-reload your browser every time you save a file. You can use SASS or regular CSS. IF IT DOESN'T SEEM TO BE RELOADING, LOOK AT YOUR TERMINAL, THERE IS PROBABLY AN ERROR IN YOUR CODE.

1. Open your terminal
2. `git clone` this repo.
3. `cd staticSiteWithGulpTemplate`
4. Install gulp globally (You'll need to have Node.js installed) `npm i gulp -g`
5. `npm i` to install the dependencies
6. Type `gulp` to start the build system. (You can also type `npm start` instead)
6. Open your browser to `http://localhost:8080`
7. The src directory is where you edit your code, gulp will automatically change and move your files into the dist folder, the way it is set up now all images should be inside the dist folder. IF YOU MAKE ANY OTHER CHANGES IN THE DIST FOLDER (to html, js, or css files) THEY WILL BE OVERWRITTEN.
8. If everything looks ok in your browser, 
  - delete the code in src/myStyles.scss
  - delete the code in src/template.js
  - delete the file src/_mobile.scss

9. If you are going to use this for a real project, you'll want to delete the .git folder and then run `git init` to start fresh.





