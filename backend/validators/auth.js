const { check } = require('express-validator');


exports.userSignUpValidators = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required!'),
    check('email')
        .isEmail()
        .withMessage('Please provide a valid email!'),
    check('password')
        .isLength({min:6})
        .withMessage('Password must at least 6 characters!'),
];

exports.userSignIpValidators = [
    check('email')
        .isEmail()
        .withMessage('Please provide a valid email!'),
    check('password')
        .isLength({min:6})
        .withMessage('Password must at least 6 characters!')
];