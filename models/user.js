const mongoose = require('mongoose');

const multer=require('multer');
const path=require('path');
const dp_path=path.join('/uploads/user/dp')

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dp:{
        type:String
    }
}, {
    timestamps: true
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',dp_path))   //user.js(__dirname)->models->dp_path
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   

// static
userSchema.statics.uploadedDp = multer({storage:  storage}).single('dp');
userSchema.statics.dpPath = dp_path;

var User = mongoose.model('User', userSchema);

module.exports = User;