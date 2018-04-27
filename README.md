# line-app

<strong><a href="https://react-line-app.herokuapp.com/">Live Demo</a></strong>

The purpose of this project was to use React to make a simple application that allows a user to click once, then click and again and have a line drawn in between the two points, if the user clicks again then another line is drawn. Google searches did not turn up anyone else that had done this with React so I adapted jQuery solutions to accomplish this.

The magic happens with the \<canvas> element. On click an event handler takes the X + Y coordinates and compensates for the screen and element offsets. If it is the first click, those coordinates are saved into state as the last click's coordinates. If the user has clicked more than once the app starts at the last clicked location on the canvas, moves to the new click and strokes in a line.

The user can also choose a line color from a palette implemented with a react plugin called <a href="https://www.npmjs.com/package/react-color">'react-color'</a>.
