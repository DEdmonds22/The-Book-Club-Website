const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    // checks for the token being sent in a header or as a query parameter
    let token = req.get("Authorization") || req.query.token; 
    if (token) {
        // remove the "Bearer " if token existed in token header
        token = token.replace("Bearer ", "");

        // checks if token is valid and not expired
        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            // if vaild token, decoded will be the token's entire payload, else error will be set
            req.user = error ? null : decoded.user;
            req.exp = error ? null : new Date(decoded.exp * 1000);
            console.log(req.user)
            return next();
        });
    } else {
        // no token was sent
        req.user = null;
        return next();
    }
}