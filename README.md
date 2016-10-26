# Challenge process

This project is the result of a challenge process with React + Electron + NodeJS + MongoDB

### React

For this project, you must create a simple page with react. The page must include a header and 2
buttons as like this:

![alt tag](https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img1.png)

If you press on the button ‘square’, a square must be progressively drawn (The animation to draw
the square is left to your discretion). The shape must be draw with the duplication of this circle
image (or any other shape of your choice). Finally, the name of the shape appears on the header.
Same thing is asked for the diamond shape.

At the end, the shapes should looks like this:


![alt tag](https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img2.png)

Animations for the buttons are also required. For instance, the button could change color or size if
the mouse is over it. Once done, push your project on your personal github account. Name your
repo for this project “Geometric” and rename the master branch as ‘React’. We will evaluate the
quality of the animations and the algorithmic optimization to draw both shapes

### Bootstrap

Create a new branch to your repo “Geometric” named ‘Bootstrap’. In this branch, you are going to
modify your project to be responsive with Bootstrap. Hence, if you change the window size, the
button and shape should resize, looking like this:


![alt tag](https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img3.png)


### Electron

Finally, with the same code, use Electron framework to create a native app. Add this project in another git repo branch

### NodeJs

For this project, you must create a web server, using node.js. This web server must include a database (for this project, an xml file will be sufficient) and must handle the communication between 2 clients (with websocket will be a plus). The database must include: the link of the image, the name of the shape, the name of its color and the number of time seen. The first client is a mobile web app with 2 buttons: sort by categories, sort by color

![alt tag](https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img4.png)


The second client is a webpage that shows the content of the database (geometrical shapes). If you sort by categories with the mobile webapp, you should see a result similar to this in the webpage:

And sorting by color should give a result similar to this:

![alt tag](https://raw.githubusercontent.com/migueloop/1streaction/master/chall_imgs/img5.png)

A dynamic, animated resorting is a plus.

Finally, if you pass the mouse over each shape, a description retrieved from the database should appear and give the type of shape, color of it and the number of time seen. The number of time seen is calculated by the number of time you pass the mouse over a shape. Each time you pass the mouse over the shape, you must increment the number of view for the shape and save this
number in the database.
