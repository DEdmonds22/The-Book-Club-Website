import User from "../../models/user";

// This serves as the create Sign-Up controller Action. This will need to return a JSON JWT from the controller action after the user is added to the db.
const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
    } catch (error) {
        res.status(400).json(error);
    };
};

module.exports = {
    create
}