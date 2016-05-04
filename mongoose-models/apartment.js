module.exports = function(mongoose){

  // Create a new mongoose schema
  var ApartmentSchema = mongoose.Schema({
    adress: {type: String, required: true},
    room: {type: Number, required: true},
    size: {type: Number, required: true},
    price: {type: Number, required: true},
    type: {type: String, required: true},
    description: {type: String, required: false},
    pic: {type: String, required: false}

    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  ApartmentSchema.pre('update', function(next) {
    // tell mongoose to run validators before every "update"
    // on this schema
    this.options.runValidators = true;
    next();
  });

  // Return the model
  return mongoose.model("Apartment", ApartmentSchema);
};