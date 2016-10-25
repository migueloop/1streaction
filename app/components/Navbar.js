import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';
import ShapesListActions from '../actions/ShapesListActions';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/stats'>Stats</Link></li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Filter by <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/filter/color' onClick={ShapesListActions.getFilteredShapes.bind(this, 'color')}>Color</Link></li>
                <li><Link to='/filter/type' onClick={ShapesListActions.getFilteredShapes.bind(this, 'type')}>Type</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
