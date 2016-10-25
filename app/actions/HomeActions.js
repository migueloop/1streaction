import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getShapesSuccess',
      'getShapesFail'
    );
  }

  getDefaultShapes() {
    $.ajax({ url: '/api/shapes' })
      .done(data => {
        this.actions.getShapesSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getShapesFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(HomeActions);
