/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import history from '../../core/history';
import Link from '../Link';

import s from './Navigation.css';

function Navigation() {
  const path = history.getCurrentLocation().pathname;
  const linkClass = href => `${s.link}${path === href ? ` ${s.active}` : ''}`;


  return (
    <nav className={s.nav}>
      <div className={s.navTitle}>
        <h1>  Geometric shapes </h1>
      </div>

      <div className={s.navSubtitle}>
      </div>
    </nav>
  );
}

export default Navigation;
