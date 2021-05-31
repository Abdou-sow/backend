const express = require('express');
const cors = require("cors");
// const { json } = require('express');


const port = 8000;

const app = express();

app.use(cors())
app.use(express.json())

// middleware
app.use(function (req, res, next) {
    console.log("a travers des requêtes");
    next();
})

function transformName(req, res, next) {
    if(req.body.name != undefined ){

        req.body.name=req.body.name.toLowerCase()
    }
    else{
        res.json({
            message : "vous aver pas ajouter de supre hero !"
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

    // console.log("namehero :",namehero);
    // console.log("objet envoyer:",superHeros[1].name);
    // console.log(namehero ===superHeros[1].name );               //verrificarion 
    for (var i = 0; i < superHeros.length; i++) {
        if (superHeros[i].name === namehero) {

            res.json(superHeros[i])

        }
    }
})

app.get('/heroes/:name/powers', (req, res) => {

    let namehero = req.params.name;

    for (var i = 0; i < superHeros.length; i++) {
        if (superHeros[i].name === namehero) {

            res.json(superHeros[i].power)

        }
    }

})

app.post('/heroes',transformName, (req, res) => {

    // let newHeroe = req.body;
    // console.log("req.body :" ,req.body);
    // console.log("req.body.typeof :" , req.body.name.toLowerCase());

    superHeros.push(req.body)
    res.json({
        message: "Ok, héros ajouté"
    })
})

app.post('/heroes/:name/powers',(req,res) =>{
    let namehero = req.params.name;

    for (var i = 0; i < superHeros.length; i++) {
        if (superHeros[i].name === namehero) {

            superHeros[i].power.push(req.body.power)

        }
    }
    res.json({
        message: "pouvoir ajouté !"
    })

})

//run server 
app.listen(port, () => {
    console.log('server started on potr :', port);
})