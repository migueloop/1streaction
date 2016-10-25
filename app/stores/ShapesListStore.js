import alt from '../alt';
import ShapesListActions from '../actions/ShapesListActions';

class ShapesListStore {
  constructor() {
    this.bindActions(ShapesListActions);
    this.shapes = [];
  }

  onGetShapesSuccess(data) {
    this.shapes = data;
  }

  onGetShapesFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(ShapesListStore);
