const mongoose = require('mongoose');
const Profile = require("../models/Profile.model");

const profileBodySchema = new mongoose.Schema({
    profile: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Profile",
        required: true
    },
    bkgImgBODY: String,
    bkgBODY: String,
    txtColorBODY: String,
    backgroundImg: String,
    bkgImgON: Boolean,
    bkgImgCover: Boolean,
    backgroundColor: String,
    textColor: String,
    imgOneON: Boolean,
    imageOne: String,
    imgWidthOne: String,
    imgHeightOne: String,
    imgTwoON: Boolean,
    imageTwo: String,
    imgWidthTwo: String,
    imgHeightTwo: String,
    video: String,
    videoON: Boolean,
    titleOne: String,
    subTitleOne: String,
    textOne: String,
    titleTwo: String,
    subTitleTwo: String,
    textTwo: String,
    margin: String,
    col2: Boolean,
    fluid: Boolean
})

const ProfileBody = mongoose.model('ProfileBody', profileBodySchema);

module.exports = ProfileBody;