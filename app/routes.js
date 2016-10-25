import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    {/* <Route path='/stats' component={Stats} /> */}
    {/* <Route path='/shapes/:id' component={Shape} /> */}
    {/* <Route path='/add' component={AddCharacter} />
    <Route path=':category' component={ShapeList}>
      <Route path=':race' component={ShapeList}>
        <Route path=':bloodline' component={ShapeList} />
      </Route>
    </Route> */}
  </Route>
);
