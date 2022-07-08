const router = require('express').Router();


router.get('/', async (req, res) => {
res.render('home')
})

router.get('/login', (req,res) => {
res.render('login', {main:['daniel','erick','john']})
})


module.exports = router;