const router = require('express').Router();
const { Owner } = require('../../models');
const Dog = require('../../models/Dog');

//CREATE new user
router.post('/', async (req, res) => {
    const { username, firstname, lastname, email, phonenumber, password, dogname, dogbreed, dogweight, sex } = req.body
  try {
    const dbOwnerData = await Owner.create({
      username,
      email,
      password,
      firstname,
      lastname,
      phonenumber
    });

    const dbDogData = await Dog.create({
        name,
        breed,
        weight,
        sex,
       owner_id: dbOwnerData.id,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({dbOwnerData, dbDogData});
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // Login
// router.post('/login', async (req, res) => {
//   try {
//     const dbOwnerData = await Owner.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });

//     if (!dbOwnerData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//       return;
//     }

//     const validPassword = await dbOwnerData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//       return;
//     }

//     // Once the user successfully logs in, set up the sessions variable 'loggedIn'
//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res
//         .status(200)
//         .json({ user: dbOwnerData, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Logout
// router.post('/logout', (req, res) => {
//   // When the user logs out, destroy the session
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;