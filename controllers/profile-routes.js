const router = require("express").Router();
const sequelize = require("../config/connection");
const { Owner, Dog } = require("../models");
const withAuth = require("../utils/auth");

//enter owner and dog info in profile page
router.get("/:id", withAuth, (req, res) => {
  Owner.findByPk(req.params.id, {
<<<<<<< HEAD
    where: {
      id: req.params.id,
    },
    include: [Dog],
=======

   include: [
    {
      model: Dog
    }
   ]

>>>>>>> 5cecdae1315394cd85373ea9d14b7b22ba501dd1
  })
    .then((dbOwnerData) => {
      const owner = dbOwnerData.get({ plain: true });
      res.render("profile", owner);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
