const router = require('express').Router();
// const User = require('../../models/User')


router.get('/',  (req, res)=>{
    res.json('test home Routes')
});

module.exports = router;
 