const express = require('express');
const router = express.Router();
const {signup, signin} = require('../controllers/userController');
const { runValidation } = require('../validators');
const { userSignUpValidators, userSignIpValidators } = require('../validators/auth');

router.get('/signup', (req, res)=>{
    res.send("User get request")
});
router.post('/signup', runValidation, userSignUpValidators ,signup);
router.post('/signin', runValidation, userSignIpValidators ,signin);


module.exports = router;