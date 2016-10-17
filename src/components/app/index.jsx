import React, { Component } from 'react';
import electron, { ipcRenderer } from 'electron';

import s from './styles.css';
import ShapesSet from '../canvas';

export default class App extends Component {



  render() {

    return (
      <div>
      <nav className={s.nav}>
      <div className={s.navTitle}>
        <h1>  Geometric shapes </h1>
      </div>

      <div className={s.navSubtitle}>
      </div>
    </nav>
    <div>
    <ShapesSet></ShapesSet>
    </div>
    </div>
    )
  };
}
