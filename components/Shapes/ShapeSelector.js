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

    _getSelectors () {
      const selectorsList = [
        { id:1 , title: 'Diamond'},
        { id:2, title: 'Square'}
      ];

      return selectorsList.map((selector) => {
          return(
            <SelectorButton buttonType={selector.title} key={selector.id}> </SelectorButton>
          );
        });
    }


    render() {
      var selectors = this._getSelectors();
      return (
        <div>
          {selectors}
       </div>
      );
    }

}


class SelectorButton extends React.Component {

    constructor() {
      super();
    }
    _handleClick(type) {
      let selectedType = type.target.textContent;
      console.log("holi" + selectedType);

    }
    render() {
      return (
          <a className={s.button} onClick={this._handleClick.bind(this.props.buttonType)}>{this.props.buttonType}</a>
        );
    }

}

export default ShapeSelector;
