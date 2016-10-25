import alt from '../alt';

class ShapesListActions {
  constructor() {
    this.generateActions(
      'getShapesSuccess',
      'getShapesFail'
    );
  }

  getDefaultShapes() {
    console.log("joeeee");
    $.ajax({ url: '/api/shapes' })
      .done(data => {
        this.actions.getShapesSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getShapesFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(ShapesListActions);
