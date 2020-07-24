const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
    courseName: String,
    courseNameColor: String,
    backgroundColor: String,
    linkOnTrialVideo: String,
    modules: [
        {
            trial: {
                name: String,
                duration: String,
                countLections: Number,
                shortDescription: String,
                description: String,
                items: [{ label: String, duration: Number }],
            },
            full: {
                link: String,
            },
        },
    ],
});

module.exports = model("Course", CourseSchema);
