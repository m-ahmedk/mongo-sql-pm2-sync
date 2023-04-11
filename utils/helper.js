const mongoose = require("mongoose");

const helpers = {};

helpers.isValidURL = function (text) {
    return text.startsWith("http");
};

helpers.generateRandomString = function () {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < n; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

helpers.isValidObjectId = function (id) {
    return mongoose.Types.ObjectId.isValid(id);
};

helpers.isNullOrUndefined = function (value) {
    if (value === undefined || value === null || value === "") return true;
};

helpers.trim_fields = async function (obj) {
    var list = Object.entries(obj);
    let array = new Array();

    for (let i = 0; i < list.length; i++) {
        list[i][1] = list[i][1].trim();
        array.push(list[i]);
    }

    return array;
}

module.exports = helpers;