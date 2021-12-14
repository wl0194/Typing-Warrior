const router = require('express').Router();
const { User } = require('../models');

router.get('/login', async (req,res) =>{
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }
    res.render('login');
});

module.exports = router;