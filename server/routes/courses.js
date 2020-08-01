const { Router } = require("express");

const Course = require("../models/course");

const User = require("../models/user");

const router = Router();

router.post("/add", async (req, res) => {
    const adminToken = (await User.findOne({ login: "admin" })).password;

    if (req.body.token.toString() === adminToken.toString()) {
        const {
            courseName,
            link,
            courseNameColor,
            backgroundColor,
            backgroundImageLink,
            linkOnTrialVideo,
            shortDescription,
            description,
            modules,
        } = req.body;
        const newCourse = new Course({
            courseName,
            link,
            courseNameColor,
            backgroundColor,
            backgroundImageLink,
            linkOnTrialVideo,
            shortDescription,
            description,
            modules,
        });
        await newCourse.save();
    } else {
        res.redirect("http://localhost:3000/auth/login");
    }
});

router.get("/all", async (req, res) => {
    const courses = await Course.find();

    res.send(
        JSON.stringify(
            courses.map(
                ({
                    courseName,
                    link,
                    backgroundImageLink,
                    courseNameColor,
                }) => ({
                    courseName,
                    link,
                    backgroundImageLink,
                    courseNameColor,
                })
            )
        )
    );
});

router.get("/:link", async (req, res) => {
    const { link } = req.params;
    const course = await Course.find({ link });
    // if (req.session.user.courses.filter((e) => e.link === link)) {
    //     res.send(course.trial);
    // } else {
    res.send(JSON.stringify(...course));
    // }
});

module.exports = router;
