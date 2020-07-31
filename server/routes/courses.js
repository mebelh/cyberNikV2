const { Router } = require("express");

const Course = require("../models/course");

const User = require("../models/user");

const router = Router();

router.post("/add", async (req, res) => {
    const adminToken = (await User.findOne({ login: "admin" })).password;

    if (req.body.token.toString() === adminToken.toString()) {
        const {
            courseName,
            courseNameColor,
            backgroundColor,
            linkOnTrialVideo,
            modules,
        } = req.body;

        const newCourse = new Course({
            courseName,
            courseNameColor,
            backgroundColor,
            linkOnTrialVideo,
            modules,
        });
        await newCourse.save();
    } else {
        res.redirect("/auth/login");
    }
});

router.get("/all", async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
});

router.get("/id:link", async (req, res) => {
    const { link } = req.params;
    const course = await Course.find({ link });
    if (req.session.user.courses.filter((e) => e.link === link)) {
        res.send(course.trial);
    } else {
        res.send(course);
    }
});

module.exports = router;
