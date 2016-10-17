import React, { Component } from 'react';
import electron, { ipcRenderer } from 'electron';

import s from './styles.css';
import ShapesSet from '../canvas';
import { Button, Row, Col, Grid, ButtonGroup } from 'react-bootstrap';

export default class App extends Component {

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


  render() {
    var selectors = this.state.selectorsList.map(function(childData,childIndex) {
      return <Button bsStyle="primary" bsClass={s.selectorButton} onClick={this.handleChildClick.bind(null,childData)} key={childData.id}> {childData.title}</Button>;
    }.bind(this));

    return (
          <div>
          <nav className={s.nav}>
          <div className={s.navTitle}>
            <h1>  Geometric shapes </h1>
          </div>

          <div className={s.navSubtitle}>
            {this.state.selectedShape}
          </div>
        </nav>
        <div>

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
    </div>
    </div>
    )
  };
}
