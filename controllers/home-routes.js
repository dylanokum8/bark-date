const router = require("express").Router();
const { Post, Comment } = require("../models");

// Import the custom middleware
const withAuth = require("../utils/auth");

//homepage
router.get("/", async (req, res) => {
  Post.findAll({
    include: [
      {
        model: Comment,
      },
    ],
  })
    .then((postdata) => {
      let posts = postdata.map((post) => {
        return post.get({ plain: true });
      });
      const loggedIn = req.session.loggedIn ? req.session.loggedIn : false;
      const owner_id = req.session.owner_id;
      res.render("home", { loggedIn, owner_id, posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login page
router.get("/login", (req, res) => {
  res.render("login", { main: ["daniel", "erick", "john"] });
});

//sign up page
router.get("/signup", (req, res) => {
  res.render("signup");
});

//dashboard
router.get("/dashboard", (req, res) => {
  const loggedIn = req.session.loggedIn ? req.session.loggedIn : false;
  const owner_id = req.session.owner_id;
  if (owner_id) {
    Post.findAll({
      where: { owner_id: owner_id },
      // ,include: [
      //   {
      //     model: Comment
      //   }
      // ]
    }).then((postdata) => {
      let posts = postdata.map((post) => {
        return post.get({ plain: true });
      });
      res.render("dashboard", { loggedIn, owner_id, posts });
    });
  } else {
    res.render("dashboard", { loggedIn, owner_id });
  }
});

//profile page
router.get("/profile", (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render("profile", { loggedIn });
});

module.exports = router;
