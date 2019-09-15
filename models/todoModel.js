const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    name: {type: String, required: true},
    complete: {type: Boolean},
});


// Export the model
module.exports = mongoose.model('Todo', TodoSchema);