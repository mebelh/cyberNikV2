const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: String,
    login: String,
    password: String,
    courses: [
        {
            courseId: {
                type: Schema.Types.ObjectId,
                ref: "Course",
            },
        },
    ],
});

module.exports = model("User", UserSchema);
