var pets = require("../controllers/petsCtrl.js");
var path = require("path");


//Same code from authors
module.exports = function (app) {

    app.get("/api/pets", pets.index)

    app.get("/api/editPet/:id", pets.details)

    app.post("/api/pets", pets.createPet)

    app.put("/api/pets/:id", pets.editPet)

    app.delete("/api/pet/:id", pets.deletePet)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}