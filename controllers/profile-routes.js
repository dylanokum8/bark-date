const router = require("express").Router();
const { Owner, Dog } = require("../models");
const withAuth = require("../utils/auth");

//enter owner and dog info in profile page
router.get("/:id", withAuth, (req, res) => {
  Owner.findByPk(req.params.id, {
    include: [
      {
        model: Dog,
      },
    ],
  })
    .then((dbOwnerData) => {
      const owner = dbOwnerData.get({ plain: true });
      const loggedIn = req.session.loggedIn;
      const owner_id = req.session.owner_id;
      res.render("profile", { loggedIn, owner_id, owner });
      console.log("owner data has been passed through");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
