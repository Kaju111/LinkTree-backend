const mongoose = require('mongoose')
const {model, Schema} = mongoose

const User = new Schema({
    name:{type: String},
    bio:{type: String},
    email:{type: String, require: true, unique: true},
    avater: {type: String,default: 'https://cdn-icons-png.flaticon.com/128/924/924915.png'},
    password: {type: String, require: true},
    role: {type: String, enum: ['Creator', 'Brand', 'Agency', 'admin'], default: 'Creator'},
    handle: {type: String, require:true, unique: true},
    links:[{
        url: {type: String},  
        title: {type: String}, 
        icon: {type: String},
    }],
    socialMedia:{
        facebook: {type: String},
        twitter: {type: String},
        instagram: {type: String},
        youtube: {type: String},
        linkedin: {type: String},
        github: {type: String},
    },
},{collation: 'user-data-linktree'})

const userModel = model ('userData',User)

module.exports = userModel

