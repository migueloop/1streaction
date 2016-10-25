import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.shapes = [];
  }

  onGetShapesSuccess(data) {
    this.shapes = data;
  }

  onGetShapesFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(HomeStore);
