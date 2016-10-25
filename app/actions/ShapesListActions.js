import alt from '../alt';

class ShapesListActions {
  constructor() {
    this.generateActions(
      'getShapesSuccess',
      'getShapesFail'
    );
  }

  getFilteredShapes(filterName) {
    if(filterName != undefined){
    $.ajax({ url: '/api/shapes/filter/'+ filterName})
      .done(data => {
        console.log(data);
        this.actions.getShapesSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getShapesFail(jqXhr.responseJSON.message);
      });
    }
    else{
      $.ajax({ url: '/api/shapes/'})
        .done(data => {
          this.actions.getShapesSuccess(data);
        })
        .fail(jqXhr => {
          this.actions.getShapesFail(jqXhr.responseJSON.message);
        });
      }
    }

  }

export default alt.createActions(ShapesListActions);
