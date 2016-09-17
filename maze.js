

// This function is called once the page has finished loading
window.onload = function(){
  // set up the drawing context and perform any one time tasks here






  // this function is called when the button is clicked
  document.getElementById('drawButton').onclick = function(){
    // get the size from the user
    var size = parseInt(document.getElementById('size').value),
    // force the size to be odd, and add two to create the boundaries
    size = size % 2 === 0 ? size + 3 : size + 2;

    // generate the maze (you write buildMaze())
    var maze = buildMaze(size);

    // code to test the result of maze generation -- assumes a 2D array of
    // 1s and 0s
    var s = "";
    for (var j = 0; j < size; j++){
      for  (var i = 0; i < size; i++){
        s = s + (maze[i][j] === 0 ? '#' : '.');
      }
      s = s + '\n';
    }

    console.log(s);

    // Draw the maze with WebGL



  };


};
