const express = require("express");
const router = express.Router();
const {blog} = require('../controllers/blogController');


router.get('/blog', blog);


module.exports = router;