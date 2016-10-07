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

const title = 'React App Starter Kit';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className="jumbotron">
            <ShapesSet></ShapesSet>
        </div>
        <div className="container">
        <p>This is some text.</p>
        <p>This is another text.</p>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
