  module.exports = function createDefaultShapesSet () {
    let shapes = ['triangle', 'square', 'circle']
    let colors = ['red', 'green', 'blue']
    let shapesCollection = []
    for (var i=0; i<shapes.length; i++){
      for (var j=0; j<colors.length; j++){
        var shape = {
            url : `${shapes[i]}_${colors[j]}.png`,
            name : shapes[i],
            color : colors[j]
          }
          shapesCollection.push(shape);
      }
    }
    return shapesCollection;
  }
