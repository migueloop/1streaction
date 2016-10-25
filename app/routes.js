import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import ShapesList from './components/ShapesList';


export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/filter/:filterName' component={ShapesList} />
    {/* <Route path='/shapes/:id' component={Shape} /> */}
    {/* <Route path='/add' component={AddCharacter} />
    <Route path=':category' component={ShapeList}>
      <Route path=':race' component={ShapeList}>
        <Route path=':bloodline' component={ShapeList} />
      </Route>
    </Route> */}
  </Route>
);
