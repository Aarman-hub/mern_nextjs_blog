const mongooes = require('mongoose');
const crypto = require('crypto');


const Schema = mongooes.Schema;


const userSchema = new Schema({
    username:{
        type:String,
        trim:true,
        required:true,
        max:32,
        unique:true,
        index:true,
        lowercase:true,
    },
    name:{
        type:String,
        trim:true,
        required:true,
        max:12
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true,
    },
    
    hash_password:{
        type:String,
        required:true,
    },
    salt:String,
    role:{
        type:Number,
        trim:true
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
    resetPsswordLink:{
        data: String,
        default:'',
    }
},{timestamps:true});



userSchema.virtual('password')
    .set(function(password){
        this._password = password

        this.salt = this.makeSalt();

        this.hash_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

userSchema.methods ={

    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hash_password;
    },

    encryptPassword:function(password){
        if(!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    },
    
    makeSalt: function(){
        return Math.round(new Date().valueOf() * Math.random()) + '';
    }

}

const User = mongooes.model("User", userSchema);


module.exports = User;