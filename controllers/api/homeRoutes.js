const router = require('express').Router();


router.get('/',  (req, res)=>{
    res.json('test home Routes')
});

module.exports = router;
 