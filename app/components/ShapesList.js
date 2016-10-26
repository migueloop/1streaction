import React from 'react';
import {Link} from 'react-router';
import ShapesListStore from '../stores/ShapesListStore'
import ShapesListActions from '../actions/ShapesListActions';


class ShapesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = ShapesListStore.getState();
    this.props = props;
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ShapesListStore.listen(this.onChange);
    var filterName;
    if(this.props.params !== undefined) {
      filterName   = this.props.params.filterName;
    }
    ShapesListActions.getFilteredShapes(filterName);
  }

  componentWillUnmount() {
    ShapesListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(){

  }

  onMouseLeaveHandler(shape){
    ShapesListActions.updateShapeSeenTimes(shape._id);
  }

  render() {
    var shapesList = this.state.shapes.map((shape, index) => {
     return (
       <div key={shape._id} className='col-xs-6 col-sm-4 col-md-4'>
         <div className='pointer fadeInUp animated'>
           <img className='list-group-item' key={shape._id} onClick={this.handleClick.bind(this, shape)} onMouseLeave={this.onMouseLeaveHandler.bind(this,shape)} src={'/img/shapes/' + shape.url}/>
         </div>
       </div>
     );
    });
    return (
        <div className='list-group'>
          {shapesList}
        </div>
    );
  }
}

export default ShapesList;
