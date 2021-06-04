const express = require('express');
const cors = require("cors");


const port = 8000;

const app = express();

app.use(cors())
app.use(express.json())



// middleware
app.use(function (req, res, next) {
    console.log("a travers des requêtes");
    next();
})

function nameONlisteToAdd(req, res, next) {
    for (var i = 0; i < superHeros.length; i++) {

        if (req.body.name.toLowerCase() === superHeros[i].name.toLowerCase()) {

            console.log("superHeros[i].name :", superHeros[i].name.toLowerCase());
            return res.json("ce super hero existe deja !")

        } else {
            console.log("superHeros[i].name :", superHeros[i].name);
        }
    }
    next()
}

function nameONlisteToDelet(req, res, next) {
    console.log("superHeros.length : ", superHeros.length)

    for (var i = 0; i < superHeros.length; i++) {

        console.log("req.body.name.toLowerCase() :", req.body.name.toLowerCase());""
        console.log("superHeros[i].name.toLowerCase() :", superHeros[i].name.toLowerCase());

        if ( superHeros[i].name.toLowerCase() === req.body.name.toLowerCase() ) {

            var superHerToDelet = superHeros[i].name.toLowerCase();
            superHeros = superHeros.filter(x => x !== superHerToDelet)


        } else {


     
        }
    }

    res.json("je suis enttrain de tester")
}

function transformName(req, res, next) {

    if (req.body.name != undefined) {

        req.body.name = req.body.name.toLowerCase()
    }
    else {
        return res.json({
            message: "vous aver pas ajouter de supre hero !"
        })
    }
    next();
}


//liste des super heros 
const superHeros = [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricty", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]



//routes
app.get('/', (req, res) => {
    res.json({ message: "server ok" });
})

app.get('/heroes', (req, res) => {
    res.json(superHeros);
})

app.get('/heroes/:name', (req, res) => {

    let namehero = req.params.name;

    for (var i = 0; i < superHeros.length; i++) {
        if (superHeros[i].name.toLowerCase() === namehero.toLowerCase()) {

            res.json(superHeros[i])

        }
    }

    res.json("le super hero n'est pas trouver")
})

app.get('/heroes/:name/powers', (req, res) => {

    let namehero = req.params.name;

    for (var i = 0; i < superHeros.length; i++) {
        if (superHeros[i].name === namehero) {

            res.json(superHeros[i].power)

        }
    }
    32
})

app.post('/heroes', nameONlisteToAdd, transformName, (req, res) => {

    superHeros.push(req.body)
    res.json({
        message: "Ok, héros ajouté"
    })
})

app.post('/heroes/:name/powers', (req, res) => {
    let namehero = req.params.name;

    for (var i = 0; i < superHeros.length; i++) {
        if (superHeros[i].name.toLowerCase() === namehero.toLowerCase()) {

            superHeros[i].power.push(req.body.power)

        }
    }
    res.json({
        message: "pouvoir ajouté !"
    })

})


app.delete('/heroes/:name', nameONlisteToDelet, (req, res) => {
    let nameheroToDelet = req.params.name

    res.json(newsuperHeros)
})



//run server 
app.listen(port, () => {
    console.log('server started on potr :', port);
})