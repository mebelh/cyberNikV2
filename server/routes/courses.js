const { Router } = require("express");

const Course = require("../models/course");

const router = Router();

router.post("/add", async (req, res) => {
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
        res.send(403);
        res.redirect("/auth/login");
    }
});

module.exports = router;
