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
const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);

        res.status(200).json(token);
    } catch (error) {
        res.status(400).json(error)
    }
};

/* LOGIN's LOGIN CONTROLLER ACTION */
const login = async (req, res) => {
    try {
        User.findOne({email: req.body.email})
            .then(foundUser => {
                if (foundUser) {
                    bcyrpt.compare(req.body.password, foundUser.password, (error, result) => {
                        if (error) {
                            console.log(error);
                            res.status(400).json(error);
                        } else {
                            if (result === true) {
                                const token = createJWT(foundUser);
                                res.status(200).json(token);
                            } else {
                                res.status(403).json({error: "Invalid Password!"})
                            }
                        };
                    });
                } else {
                    res.status(400).json({error: "User Not Found"});
                };
            });
    } catch (error) {
        res.status(400).json({error});
    };
}

module.exports = {
    create,
    login
}