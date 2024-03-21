const express = require('express');
const { handleLogin, handleSignup } = require("../controllers/authControllers.js");

const router = express.Router();

router.post('/login', handleLogin);
router.post('/signup', handleSignup);



module.exports = router;