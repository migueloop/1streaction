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
import s from './ShapeSelector.css';

class ShapeSelector extends React.Component {

    constructor() {
      super();
      //this.handleClick = this.handleClick.bind(this);
    }


    render() {
      var selectors = this.state.selectorsList.map(function(childData,childIndex) {
        return <a className={s.button} onClick={this.handleChildClick.bind(null,childData)} key={childData.id}> {childData.title}</a>;
      }.bind(this));

      return (
        <div>
          {selectors}
       </div>
      );
    }

}

export default ShapeSelector;
