# staticSiteWithGulpTemplate

This package will live-reload your browser every time you save a file. You can use SASS or regular CSS. IF IT DOESN'T SEEM TO BE RELOADING, LOOK AT YOUR TERMINAL, THERE IS PROBABLY AN ERROR IN YOUR CODE.

1. Open your terminal
2. `git clone` this repo.
3. `cd staticSiteWithGulpTemplate`
4. Install gulp globally (You'll need to have Node.js installed) `npm i gulp -g`
5. `npm i` to install the dependencies
6. Type `gulp` to start the build system. (You can also type `npm start` instead)
6. Open your browser to `http://localhost:8080`
7. The src directory is where you edit your code, gulp will automatically change and move your files into the dist folder. IF YOU MAKE CHANGES IN THE DIST FOLDER THEY WILL BE OVERWRITTEN.
8. If everything looks ok in your browser, 
  - delete the code in src/myStyles.scss
  - delete the code in src/template.js
  - delete the file src/_mobile.scss





