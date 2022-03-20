const express = require("express");
const router = express.Router();
const {tag} = require('../controllers/tagController');


router.get('/tag', tag);





module.exports = router;