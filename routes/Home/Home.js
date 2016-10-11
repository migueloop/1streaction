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
import { Button , ButtonGroup , Grid, Row, Col } from 'react-bootstrap';
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
      //console.log("The Child button data is: " + childData.title + " - " + childData.id);
      //console.log("The Child HTML is: " + event.target.outerHTML);
  }

  componentDidMount() {
    document.title = title;
  }

  render() {

    var selectors = this.state.selectorsList.map(function(childData,childIndex) {
      return <Button bsStyle="primary" onClick={this.handleChildClick.bind(null,childData)} key={childData.id}> {childData.title}</Button>;
    }.bind(this));

    return (
      <Layout>
        <Grid>
        <Row bsClass={s.rowCentered}>
            <Col xs={6} bsClass={s.rowCentered}>
              <ButtonGroup>
                {selectors}
              </ButtonGroup>
            </Col>
          </Row>
          <Row bsClass={s.rowCentered}>
            <Col xs={6} bsClass={s.rowCentered}>
                <ShapesSet shapeType={this.state.selectedShape}></ShapesSet>
            </Col>
          </Row>
        </Grid>

      </Layout>




    );
  }

}

export default HomePage;
