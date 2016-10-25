import React from 'react';
import {Link} from 'react-router';
import ShapesListStore from '../stores/ShapesListStore'
import ShapesListActions from '../actions/ShapesListActions';


class ShapesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = ShapesListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ShapesListStore.listen(this.onChange);
    ShapesListActions.getDefaultShapes();
  }

  componentWillUnmount() {
    ShapesListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(){

  }

  render() {
    var shapesList = this.state.shapes.map((shape, index) => {
     return (
       <div key={shape._id} className='col-xs-6 col-sm-4 col-md-4'>
         <div className='thumbnail fadeInUp animated'>
           <img onClick={this.handleClick.bind(this, shape)} src={'./img/shapes/' + shape.url}/>
         </div>
       </div>
     );
    });

    console.log("aaaa2");
    console.log(this.state.shapes);

    return (
        <div className='list-group'>
          {shapesList}
        </div>
    );
  }
}

export default ShapesList;
