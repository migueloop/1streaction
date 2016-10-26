import alt from '../alt';

class ShapesListActions {
  constructor() {
    this.generateActions(
      'updateShapeSeenTimesSuccess',
      'updateShapeSeenTimesFail',
      'getShapesSuccess',
      'getShapesFail'
    );
  }

  getFilteredShapes(filterName) {
    if(filterName != undefined){
    $.ajax({ url: '/api/shapes/filter/'+ filterName})
      .done(data => {
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

    updateShapeSeenTimes(shapeId){
      $.ajax({ url: '/api/shape/see/' + shapeId,
               type: 'PUT'
             })
        .done(data => {
          this.actions.updateShapeSeenTimesSuccess(data);
        })
        .fail(jqXhr => {
         this.actions.updateShapeSeenTimesFail(jqXhr.responseJSON.message);
        });
      }

  }

export default alt.createActions(ShapesListActions);
