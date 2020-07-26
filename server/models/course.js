const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
    courseName: String,
    courseNameColor: String,
    backgroundColor: String,
    linkOnTrialVideo: String,
    shortDescription: String,
    description: String,
    modules: [
        {
            name: String,
            countLections: Number,
            items: [{ label: String, duration: Number, link: String }],
        },
    ],
});

module.exports = model("Course", CourseSchema);
