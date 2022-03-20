const { check } = require('express-validator');

exports.CategoyCreateValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
];
