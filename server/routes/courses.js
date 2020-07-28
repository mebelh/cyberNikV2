const { Router } = require("express");

const Course = require("../models/course");

const router = Router();

router.post("/add", async (req, res) => {
    console.log(req.body);

    if (req.session.isAdmin && req.session.isAuthentificated) {
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
