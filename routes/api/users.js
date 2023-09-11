const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

// POST /api/users
router.post("/", usersCtrl.create);  // users-api.js's signUp func includes a POST req, which would trigger this

module.exports = router;  // since the router is now exported, we can now mount it in server.js