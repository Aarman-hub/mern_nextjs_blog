const express = require('express');
const router = express.Router();
const {signup, signin, signout, requireSignin} = require('../controllers/userController');
const { runValidation } = require('../validators');
const { userSignUpValidators, userSignIpValidators } = require('../validators/auth');

router.get('/signup', (req, res)=>{
    res.send("User get request")
});
router.post('/signup', runValidation, userSignUpValidators ,signup);
router.post('/signin', runValidation, userSignIpValidators ,signin);
router.get('/signout', signout);

router.get('/secret', requireSignin, (req, res)=>{
    res.json({
        message:'You have access to secret page'
    });
});



module.exports = router;