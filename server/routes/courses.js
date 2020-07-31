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
            shortDescription,
            description,
            modules,
        } = req.body;
        const newCourse = new Course({
            courseName,
            description,
            shortDescription,
            courseNameColor,
            backgroundColor,
            linkOnTrialVideo,
            modules,
        });
        await newCourse.save();
        res.redirect("http://localhost:3000/");
    } else {
        res.redirect("/auth/login");
    }
});

router.get("/all", async (req, res) => {
    const courses = await Course.find();
    res.send(JSON.stringify(courses));
});

router.get("/id:link", async (req, res) => {
    const { link } = req.params;
    const course = await Course.find();
    // if (req.session.user.courses.filter((e) => e.link === link)) {
    //     res.send(course.trial);
    // } else {
    res.send(course);
    // }
});

module.exports = router;
