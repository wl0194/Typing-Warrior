const router = require('express').Router();
// const User  = require('../../models/User');


router.get('/',  (req, res)=>{
    res.json('test sign up Routes')
});

module.exports = router;
 