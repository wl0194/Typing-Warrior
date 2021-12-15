const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        users,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('login');
  });
  
    
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('signup');
  });

module.exports = router;