const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require("express-validator");

const db = require("../db/models"); // check to db
const { loginUser, logoutUser } = require("../auth"); //need make auth
const { csrfProtection, asyncHandler } = require("./utils"); //need make utils

const router = express.Router();

router.get("/register", csrfProtection, (req, res) => { // route for user register

  const user = db.User.build();

  res.render("register", { // make pug template
    title: "Register",
    user,
    csrfToken: req.csrfToken(),
  })
})

const userValidators = [ // check for user valdations
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for First Name")
    .isLength({ max: 50 })
    .withMessage("First Name must not be more than 50 characters long"),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Last Name")
    .isLength({ max: 50 })
    .withMessage("Last Name must not be more than 50 characters long"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 255 })
    .withMessage("Email Address must not be more than 255 characters long")
    .isEmail()
    .withMessage("Email Address is not a valid email")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } }).then(
        (user) => {
          if (user) {
            return Promise.reject(
              "The provided Email Address is already in use by another account"
            );
          }
        }
      );
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 50 })
    .withMessage("Password must not be more than 50 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Confirm Password")
    .isLength({ max: 50 })
    .withMessage("Confirm Password must not be more than 50 characters long")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),
];

router.post("/register", csrfProtection, userValidators, asyncHandler(async (req, res) => { // route for user register

  const { email, firstName, lastName, password } = req.body;
  const user =  db.User.build({
    email,
    firstName,
    lastName
  })

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    res.redirect("/");
  } else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render("register", { // render user register template
      title: "Register",
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}));

router.get("/login", csrfProtection, (req, res) => { // route for user login

  const user = {
    email: 'testemail@gmail.com',
  }


  res.render("user-login", { // display pug template
    title: "Login",
    user,
    csrfToken: req.csrfToken(),
  })
})


router.get("/login-demo",  (req, res) => { // route for demoUser login
  const demoUser = db.User.findOne({where: {email: 'demo@demo.com'}})

  loginUser(req, res, demoUser)
  return res.redirect("/");
})

const loginValidators = [ // login for validations
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for a Password"),
];

router.post( // form post action route 
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { email } });

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );

        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect("/");
        }
      }

      errors.push("Login failed for the provided email address and password");
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render("user-login", { // render user login
      title: "Login",
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post("/logout", (req, res) => { // logout route
  logoutUser(req, res);
  res.redirect("/users/login")
})

module.exports = router;
