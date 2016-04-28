module.exports = function(mongoose){

  // Create a new mongoose schema
  var PropertySchema = mongoose.Schema({
    adress: {type: String, required: true},
    done: {type: Boolean, required: false}
    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  // Return the model
  return mongoose.model("Item", ItemSchema);
};