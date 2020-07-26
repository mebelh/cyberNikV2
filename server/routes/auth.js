const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");

const { v4: uuidv4 } = require("uuid");

const User = require("../models/user");

router.post("/login", async (req, res) => {
    const { login, password } = req.body;
    const candidate = await User.findOne({ login });

    if (candidate) {
        const areSame = await bcrypt.compare(
            password.toString(),
            candidate.password.toString()
        );
        if (areSame) {
            req.session.user = candidate;
            req.session.isAuthentificated = true;
            req.session.save(() => {
                res.redirect("/todo");
            });
        }
    } else {
        res.redirect("/todo/login");
    }
});

module.exports = router;
