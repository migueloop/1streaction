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

  initSets(totalElems){
   var limitRow = this._getRowLimit(totalElems);
   var result = [];
   let initialSize = 10;
   let shapesSeparation = 20;
   let i, j = 0;
   let initPos = 10;
   let posx, posy = initPos;
   while (j < limitRow) {
     posx = initPos;
     i = 0;
     while( i < limitRow){
     result.push({
       key: ''+i+''+j,
       shape: 'circle',
       size: initialSize,
       cx: posx,
       cy: posy,
       color: 'red'
     });
       posx += shapesSeparation;
       i++;
     }
     posy += shapesSeparation;
     j++;
   }
   return result;
 }

/**
* Search first n^n number.
**/
  _getRowLimit(totalElems){
    let resLimit = Math.sqrt(totalElems);
    while(resLimit % 1 !== 0){
      totalElems--;
      resLimit = Math.sqrt(totalElems);
    }
      return resLimit;
  }

  render() {
    var s = this.initSets(23);
        var sets1 = s.map((canvas) => {
        return(
            <Shape key={canvas.key} size={canvas.size} cx={canvas.cx} cy={canvas.cy}> </Shape>
        );
      });

      return(
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
           {sets1}
        </svg>
      )
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
                        fill={this.state.color} />
                      )
                //add more shapes here
        }
    }

}

export default ShapesSet;
