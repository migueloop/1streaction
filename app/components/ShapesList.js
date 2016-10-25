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
    console.log("on change entra");
    this.setState(state);
  }

  handleClick(){

  }

  willTransitionTo(transition,component){
    console.log("really?");
  }

  render() {
    var shapesList = this.state.shapes.map((shape, index) => {
     return (
       <div key={shape._id} className='col-xs-6 col-sm-4 col-md-4'>
         <div className='thumbnail fadeInUp animated'>
           <img onClick={this.handleClick.bind(this, shape)} src={'/img/shapes/' + shape.url}/>
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
