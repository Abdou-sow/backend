const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/garage", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
});

//add firt car 
const carSchemat = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    created: { type: Date, default: Date.now }
})

const car = mongoose.model("car", carSchemat)

function addCar1() {
    const car1 = new car({
        brand: "Renault",
        model: "Espace",
        year: 1999,
    })

    car1.save((err , car) =>{
        if(err){
            console.log("error");
        }else{
            console.log("the car id added");
        }
    })

}

// addCar1();


//add two more car
// car.insertMany([
//     {
//         brand: "Renault",
//         model: "Scenic",
//         year: "2004"
//     },
//     {
//         brand: "Peugeot",
//         model: "308",
//         year: "2017"
//     },
// ]).then(data => {
//     console.log('the car are added',data);
// }).catch(err => {
//     console.error("Error insertMany Card: ", err);
// })
