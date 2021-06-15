const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/garage", { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log("I'm connected to the database");
        }
    }
);


const carShema = mongoose.Schema(
    {
        brand: String,
        model: String,
        year: Number,
        created: Date,
        created : {type:Date ,default:Date.now}
    }
)

const car = mongoose.model("car", carShema)

const port = 9000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/car", (req, res) => {
    const cars = car.find().exec()

    // res.json({
    //     message : "ok"
    // })
    res.json(cars)
})

app.post("/car", async (req, res) => {

    try {
        const newCars = req.body
        const cars =({
            brand: newCars.brand,
            model: newCars.model,
            year: newCars.year
        })
        // console.log("newCars :", newCars);
        const carsaved = await cars.save()

        res.json(
            {
                message: "la voiture est bien ajouter",
                carsaved
            }
        )
    } catch (error) {
        console.error("Error in POST /car", error)

        res.json({
            message: "The car was not saved "
        })
    }

})

app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})