const { TOKEN_COOKIE_NAME, SECRET } = require('../constants');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    let token = req.cookies[TOKEN_COOKIE_NAME];

    if(!token) {
        return next();
    }

    jwt.verify(token, SECRET, function(err, decodedToken) {
        if(err) {
            return res.status(401).redirect('/login');
        }

        req.user = decodedToken;

        res.locals.user = decodedToken;
        
        
        next();
    });
}

function isAuth(req, res, next)  {

    if(!req.user) {
        return res.status(401).redirect('/login');
    }
    next();
}

const authMiddleware = {
    auth,
    isAuth
};

module.exports = authMiddleware;