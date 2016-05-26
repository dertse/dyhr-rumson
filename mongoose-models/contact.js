module.exports = function(mongoose){

  // Create a new mongoose schema
  var ContactSchema = mongoose.Schema({
    request: {type: String, required: true},
    region: {type: String, required: true},
    employee: {type:String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: false},
    // pic: {type: String, required: false}

    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  ContactSchema.pre('update', function(next) {
    // tell mongoose to run validators before every "update"
    // on this schema
    this.options.runValidators = true;
    next();
  });

  // Return the model
  return mongoose.model("Contact", ContactSchema);
};