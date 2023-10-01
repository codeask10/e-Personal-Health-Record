const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },firstName: {
        type: String,
        required: true,
    }, lastName: {
        type: String,
        required: true,
    }, dob: {
        type: String,
        required: true,
    }, gender: {
        type: String,
        required: true,
    }, phoneNo: {
        type: String,
        required: true,
    }, email: {
        type: String,
        required: true,
    }, address: {
        type: String,
        required: true,
    }, city: {
        type: String,
        required: true,
    }, pincode: {
        type: String,
        required: true,
    }, state: {
        type: String,
        required: true,
    }, country: {
        type: String,
        required: true,
    }

})

const UserProfile = mongoose.model("userprofile", UserSchema)
module.exports = UserProfile
