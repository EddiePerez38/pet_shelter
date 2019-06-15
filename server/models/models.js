var mongoose = require("mongoose");

var PetSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Pet's name is required!"], minlength: [3, "Name must be a minimum of 3 characters"] },
    type: { type: String, required: [true, "Pet's type is required!"], minlength: [3, "Type must be a minimum of 3 characters"] },
    description: { type: String, required: [true, "Pet's description is required!"], minlength: [3, "Description must be a minimum of 3 characters"] },
    skillOne: {type: String},
    skillTwo: {type: String},
    skillThree: {type: String},

}, { timestamps: true });


mongoose.model("Pet", PetSchema);
