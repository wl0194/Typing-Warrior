const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoutes =require('./homeRoutes');
const singUpRoutes = require('./signUpRoutes')


router.use('/users', userRoutes);
router.use('/home', homeRoutes);
router.use('/signup', singUpRoutes);


module.exports = router;