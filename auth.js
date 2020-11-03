const db = require("./db/models");

const loginUser = (req, res, user) => {
    console.log("REQ", req);
    console.log("REQ.SESSION", req.session);
    //TODO: figure out how to use session store given by JM
    req.session.store = {
        userId: user.id,
    };
};

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/user/login')
    }
    return next()
}

const restoreUser = async (req, res, next) => {
    // Log the session object to the console
    // to assist with debugging.
    console.log(req.session);

    if (req.session.auth) {
        const { userId } = req.session.auth;

        try {
            const user = await db.User.findByPk(userId);

            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (err) {
            //anon requests
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
};

const logoutUser = (req, res) => {
    delete req.session.auth;
}



module.exports = {
    loginUser,
    restoreUser,
    logoutUser,
    requireAuth,
};