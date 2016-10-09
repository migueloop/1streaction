/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
/* jshint esversion: 6 */
import React, { PropTypes } from 'react';
import s from './Shape.css';

class ShapesSet extends React.Component {
  constructor(){
    super();
  }

  initSets(totalElems, shapeType){
    let limitRow = this._getRowLimit(totalElems);
    let initialSize = 9;
    var result = [];
    switch (shapeType) {
      case 'diamond':
        result = this._createDiamondSet(limitRow, initialSize, 15);
        break;
      case 'square':
        result = this._createSquareSet(limitRow, initialSize, 20);
        break;
      default:
        result = this._createSquareSet(limitRow, initialSize, 20);
        break;
    }
    return result;
  }

  _createDiamondSet(limitRow, initialSize, shapesSeparation){
    var result = [];
    var coords = this._createCartesianCoords(shapesSeparation, limitRow);
    coords.map(function (elem) {
      let rotatedPoint = this._rotate(elem.x,elem.y,0,0,90);
      result.push({
        key: `${elem.x}${elem.y}`,
        shape: 'circle',
        size: initialSize,
        cx: rotatedPoint[0],
        cy: rotatedPoint[1],
        color: 'red'
      });
    }, this);
    return result;
  }


  _createSquareSet(limitRow, initialSize, shapesSeparation){
    var result = [];
    var coords = this._createCartesianCoords(shapesSeparation, limitRow);
    coords.map(function (elem) {
      result.push({
        key: `${elem.x}${elem.y}`,
        shape: 'circle',
        size: initialSize,
        cx: elem.x,
        cy: elem.y,
        color: 'red'
      });
    });
    return result;
  }

  render() {
    let s = this.initSets(25, this.props.shapeType);
        var sets1 = s.map((canvas) => {
        return(
            <Shape key={canvas.key} size={canvas.size} cx={canvas.cx} cy={canvas.cy} shapeType={this.props.shapeType}> </Shape>
        );
      });

      return(
        <div className={s.shape}>
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" >
             {sets1}
          </svg>
        </div>
      )
  }


  /**
   Util Functions
  */

  //rotate cx,cy mathemathically over x,y points with a given angle
  _rotate(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
  }

  //Search first n^n number.
  _getRowLimit(totalElems){
    let resLimit = Math.sqrt(totalElems);
    while(resLimit % 1 !== 0){
      totalElems--;
      resLimit = Math.sqrt(totalElems);
    }
      return resLimit;
  }

  //bidimensional array to represent (x,y) points
  _createCartesianCoords(shapesSeparation, limitRow){
    let posx = 0;
    let posy = 0;

    //create bidimensional array
    var coords = [];
    for(var i = 0; i < limitRow; i++){
      for(var j = 0 ; j < limitRow; j++){
        coords.push({x: posx, y: posy});
          posx += shapesSeparation;
      }
      posx = 0;
      posy += shapesSeparation;
    }
    return coords;
  }

}

class Shape extends React.Component {

    constructor() {
      super();
      this.state = {
        shape: 'circle',
        size: 20,
        color: 'red'
      };
  }

    changeShape (shapeName){
      var n = this.state.shape + 1;
       this.setState({
           shape: shapeName
       });
    }

    changeSize (s){
      var n = this.state.size + 1;
      this.setState({
          size: s
      });
    }

    changeColor(c){
       this.setState({
           color: c
       });
    }

    render() {
      switch (this.state.shape) {
            case 'circle':
                let size = this.props.size || this.state.size;
                return(
                    <circle
                        cx={this.props.cx}
                        cy={this.props.cy}
                        r={size}
                        fill={this.state.color}
                        />
                      )
                //add more shapes here
        }
    }

}

export default ShapesSet;
