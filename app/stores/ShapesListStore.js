import alt from '../alt';
import ShapesListActions from '../actions/ShapesListActions';

class ShapesListStore {
  constructor() {
    this.bindActions(ShapesListActions);
    this.shapes = [];
  }

  onUpdateShapeSeenTimesSuccess(shape) {
    //Todo fire action to update any king of counter in navbar
  }

  onUpdateShapeSeenTimesFail(errorMessage) {
    toastr.error(errorMessage);
  }

  onGetShapesSuccess(data) {
    this.shapes = data;
  }

  onGetShapesFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(ShapesListStore);
