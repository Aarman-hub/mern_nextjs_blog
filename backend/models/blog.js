const mongooes = require('mongoose');
const Schema = mongooes.Schema;


const BlogSchema = new Schema({});


const blog = mongooes.model("Blog", BlogSchema);

module.exports = blog;