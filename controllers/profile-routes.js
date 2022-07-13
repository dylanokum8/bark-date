const router = require("express").Router();
const sequelize = require("../config/connection");
const { Owner, Dog } = require("../models");
const withAuth = require("../utils/auth");

//enter owner and dog info in profile page
router.get("/:id", withAuth, (req, res) => {
  Owner.findByPk(req.params.id, {
    where: {
      id: req.params.id,
    },
    include: [Dog],
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
