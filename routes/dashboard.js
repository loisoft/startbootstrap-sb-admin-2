/**
 * Created by loicao on 15-08-30.
 */

function Dashboard (db) {
  var spent = db.collection("spent");
  this.areaChart = function() {
    spent.find({}, function (err, data) {
      
    })  
  }
}