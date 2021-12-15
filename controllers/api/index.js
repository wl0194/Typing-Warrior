const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const singUpRoutes = require('./signUpRoutes')


router.use('/users', userRoutes);

// router.use('/signup', singUpRoutes);


module.exports = router;