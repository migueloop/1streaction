Table of Contents
=================

   * [Challenge process](#challenge-process)
   * [Results](#results)
      * [React branch](#react-branch)
      * [Bootstrap branch](#bootstrap-branch)
      * [Electron branch](#electron-branch)
      * [master branch](#master-branch)

# Challenge process

This project is the result of a challenge process with React, Electron,  NodeJS,  MongoDB

### React

For this project, you must create a simple page with react. The page must include a header and 2 buttons as like this:

<p align="center">
<img src="https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img11.png?raw=true" width="200" height="200"/>
</p>

If you press on the button ‘square’, a square must be progressively drawn (The animation to draw the square is left to your discretion). The shape must be draw with the duplication of this circle image (or any other shape of your choice). Finally, the name of the shape appears on the header.
Same thing is asked for the diamond shape.

At the end, the shapes should looks like this:

<p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img22.png?raw=true" width="300"/>
</p>

Animations for the buttons are also required. For instance, the button could change color or size if the mouse is over it. Once done, push your project on your personal github account. Name your repo for this project “Geometric” and rename the master branch as ‘React’. We will evaluate the quality of the animations and the algorithmic optimization to draw both shapes

### Bootstrap

Create a new branch to your repo “Geometric” named ‘Bootstrap’. In this branch, you are going to modify your project to be responsive with Bootstrap. Hence, if you change the window size, the button and shape should resize, looking like this:

<p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img33.png?raw=true" width="200" height="200"/>
</p>

### Electron

Finally, with the same code, use Electron framework to create a native app. Add this project in another git repo branch

### NodeJs

For this project, you must create a web server, using node.js. This web server must include a database (for this project, an xml file will be sufficient) and must handle the communication between 2 clients (with websocket will be a plus). The database must include: the link of the image, the name of the shape, the name of its color and the number of time seen. The first client is a mobile web app with 2 buttons: sort by categories, sort by color

<p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img4.png?raw=true" width="200" height="200"/>
</p>

The second client is a webpage that shows the content of the database (geometrical shapes). If you sort by categories with the mobile webapp, you should see a result similar to this in the webpage:

And sorting by color should give a result similar to this:

<p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img5.png?raw=true" width="200"/>
</p>

A dynamic, animated resorting is a plus.

Finally, if you pass the mouse over each shape, a description retrieved from the database should appear and give the type of shape, color of it and the number of time seen. The number of time seen is calculated by the number of time you pass the mouse over a shape. Each time you pass the mouse over the shape, you must increment the number of view for the shape and save this
number in the database.

# Results

## React branch
I used a boilerplate by kriasoft that makes use of  **[React App SDK](https://github.com/kriasoft/react-app)**. Just to start from scratch.

### How to Run
In order to compile the app and launch a development web server with "live reload" run:

```sh
$ npm start
```

<p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img6.png?raw=true" width="300"/>
</p>

## Bootstrap branch
Here I added **[react-bootstrap](https://react-bootstrap.github.io/)** extension (following **[Fon](https://github.com/alfonsoperez)**´s advice)

<p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img7.png?raw=true" width="300"/>
</p>

## Electron branch
And now what? Impossible for me to integrate Electron with the source code I had until now, because react was included as a SDK. So I had to start a new project structure (experience++)

<p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img8.png?raw=true" width="300"/>
</p>

## master branch
The last part, same thing I preferred to start a new project but now using Alt instead of react-flux (just for learning proposals) and gulp instead of WebPack. There is no CSSComponent this time.

<p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img9.png?raw=true"/>
</p>

### How to Run
Development in 3 different terminals

```sh
$ npm run watch
$ gulp
$ mongob
```

Just run
```sh
$ npm start
$ mongob
```

To import default collection just call http://localhost:3000/api/createShapes via GET
