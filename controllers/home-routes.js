const router = require("express").Router();

// Import the custom middleware
const withAuth = require('../utils/auth');

//homepage
router.get("/", async (req, res) => {
  res.render("home");
});

//login page
router.get("/login", (req, res) => {
  res.render("login", { main: ["daniel", "erick", "john"] });
});

//sign up page
router.get("/signup", (req, res) => {
    res.render("signup")
})

module.exports = router;
