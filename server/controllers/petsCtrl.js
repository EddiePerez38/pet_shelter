var mongoose = require("mongoose");
var Pet = mongoose.model("Pet");

module.exports = {

    index: function (req, res) {
        Pet.find({}, function (err, pet) {
            if (err) {
                res.json({ message: "Error!", error: err });
            }
            else {
                res.json({ message: "Success!", pet: pet });
            }
        })
    },


    details: function (req, res) {
        let id = req.params.id;
        Pet.findOne({ _id: id }, function (err, pet) {
            if (err) {
                res.json({ message: "Error!", error: err });
            }
            else {
                res.json({ message: "Success!", pet: pet });
            }
        })
    },

    createPet: function (req, res) {

        Pet.create({ name: req.body.name, type: req.body.type, description: req.body.description, skillOne: req.body.skillOne, skillTwo: req.body.skillTwo, skillThree: req.body.skillThree }, function (err, createdPet) {
            if (err) {
                res.json({ message: "Error!", error: err });
            }
            else {
                res.json({ message: "Success!", added: true });
            }
        })
    },
    // Make sure you update all of the necessary keys in the edit (update section)
    editPet: function (req, res) {
        let petId = req.params.id;
        Pet.findById(petId, function (err, pet) {
            if (err) {
                res.json({ message: "Error!", error: err });
            }
            else {
                console.log("Saved pet name", pet.name)
                pet.name = req.body.name;
                pet.description = req.body.description;
                pet.type = req.body.type;
                pet.skillOne = req.body.skillOne;
                pet.skillTwo = req.body.skillTwo;
                pet.skillThree = req.body.skillThree

                pet.save(function (err) {
                    console.log("SAVE", pet)
                    if (err) {
                        res.json({ message: "Error!", error: err });
                    }
                    else {
                        res.json({ message: "Edit Success!", pet: pet })

                    }
                })
            }
        })
    },


    deletePet: function (req, res) {
        let id = req.params.id;
        console.log("Delete Pet", id);
        Pet.remove({ _id: id }, function (err) {
            if (err) {
                res.json({ message: "Error!", error: err });
            }
            else {
                res.json({ message: "Success!", removed: true });
            }
        })
    }
}