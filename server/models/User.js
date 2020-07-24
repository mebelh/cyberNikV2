const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: String,
    login: String,
    password: String,
});

module.exports = model("User", UserSchema);
