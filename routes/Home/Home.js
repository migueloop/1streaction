/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import ShapesSet from '../../components/Canvas';

import s from './Home.css';

const title = 'Shapes Drawer';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  constructor(){
    super();
    this.state = {
      selectorsList : [
        { id: 1 , title: 'square'},
        { id: 2, title: 'diamond'}
      ],
      selectedShape : 'square'
    };
    this.handleChildClick = this.handleChildClick.bind(this);
  }


  handleChildClick (childData,event) {
      this.setState(
        {selectedShape : childData.title}
      );
      console.log("The Child button data is: " + childData.title + " - " + childData.id);
      console.log("The Child HTML is: " + event.target.outerHTML);
  }

  componentDidMount() {
    document.title = title;
  }

  render() {

    var selectors = this.state.selectorsList.map(function(childData,childIndex) {
      return <a className={s.selectorButton} onClick={this.handleChildClick.bind(null,childData)} key={childData.id}> {childData.title}</a>;
    }.bind(this));

    return (
      <Layout className={s.content}>
        <div className="jumbotron">
            {selectors}
        </div>
        <div className="container">
        <ShapesSet shapeType={this.state.selectedShape}></ShapesSet>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
