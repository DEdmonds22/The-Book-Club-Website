// Tthis serves as the create Sign-Up controller Action. This will need to return a JSON JWT from the controller action after the user is added to the db.
const create = (req, res) => {
    res.json({
        user: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName
        }
    })
}

module.exports = {
    create
}