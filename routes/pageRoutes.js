const express = require("express");
const router = express.Router();

// Home page
router.get("/", (req, res) => {
    res.render("index");
});

// Register page
router.get("/register", (req, res) => {
    res.render("register");
});

// Login page
router.get("/login", (req, res) => {
    res.render("login");
});

module.exports = router;