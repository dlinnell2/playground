var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ExampleSchema = new Schema({

  working:{
      type: Boolean
  }

},{
    timestamps : true
});


var Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;