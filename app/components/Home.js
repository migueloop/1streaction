import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import ShapesList from './ShapesList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Select your favorite Shape.</h3>
        <div className='row'>
          <ShapesList></ShapesList>
        </div>
      </div>
    );
  }
}

export default Home;
