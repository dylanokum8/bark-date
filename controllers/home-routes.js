const router = require("express").Router();

// Import the custom middleware
const withAuth = require("../utils/auth");

//homepage
router.get("/", async (req, res) => {
  const loggedIn = req.session.loggedIn ? req.session.loggedIn : false;
  const user_id = req.session.user_id;
  res.render("home", { loggedIn, user_id });
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
  res.render("dashboard");
});

//profile page
router.get("/profile", (req, res) => {
  res.render("profile");
});

module.exports = router;
