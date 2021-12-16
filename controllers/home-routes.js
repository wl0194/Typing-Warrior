const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get("/dashboard", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.email, {
      attributes: { exclude: ["password"] },
     
    });
    if (!userData) {
      res.status(500).json({ message: "Could not find user" });
      return;
    }

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      loggedIn: true,
      dashboard: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// render signup page
router.get("/signup", (req, res) => {
  
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

// render login page
router.get("/login", withAuth, (req, res) => {
  
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});


// render homepage
router.get("/", (req, res) => {
  
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("homepage");
});


module.exports = router;

//****BELOW IS OLD CODE. DON'T REMOVE IT JUST IN CASE******//

// const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//     try {
//       const userData = await User.findAll({
//         attributes: { exclude: ['password'] },
//       });
  
//       const users = userData.map((user) => user.get({ plain: true }));
  
//       res.render('dashboard', {
//         users,
//         dashboard: true,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   router.get('/login', (req, res) => {
//     // if (req.session.loggedIn) {
//     //   res.redirect('/dashboard');
//     //   return;
//     // }
  
//     res.render('login');
//   });
  
//   router.get('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('login');
//   });

//   router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/dashboard');
//       return;
//     }
  
//     res.render('signup');
//   });

// module.exports = router;