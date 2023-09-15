const { request } = require("express");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcyrpt = require("bcrypt");

function createJWT(user) {
    return jwt.sign (
        {user},
        process.env.SECRET,
        { expiresIn: '24h'}
    );
};

/* SIGN-UP's CREATE CONTROLLER ACTION  */

// This serves as the create Sign-Up controller Action. This will need to return a JSON JWT from the controller action after the user is added to the db.
const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);

        res.status(200).json(token);
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = {
    create
}