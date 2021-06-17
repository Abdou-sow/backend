const express = require('express');
const router = express.Router();

router.get('/', async(req, res) =>{
  
    try {

        const user = await User.find().exec()
        const nameUser = user.map(x => x.userName)

        res.json(nameUser)

    } catch (error) {

        res.json({
            message: "Error when finding user :("
        })
    }
})

module.exports = router;