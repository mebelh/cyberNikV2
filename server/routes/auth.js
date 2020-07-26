const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");

const { v4: uuidv4 } = require("uuid");

const User = require("../models/user");

router.post("/login", async (req, res) => {
    const { login, password } = req.body;
    // console.log(req.body);
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
        // res.redirect("/todo/login");
    }
});

router.post("/register", async (req, res) => {
    try {
        const { login, password, repeat } = req.body;

        const candidate = await User.findOne({ login });
        if (candidate) {
            //Логин занят
            res.redirect("/auth/login#register");
        } else if (password !== repeat) {
            console.log(password + "  ||| " + repeat);
            //Пароли не совпадают
            res.redirect("/auth/login#register");
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = new User({
                login,
                password: hashPassword,
                courses: [],
            });

            //Успешная регистрация

            await user.save();

            res.redirect("/auth/login");
        }
    } catch (e) {
        console.log(e);
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/auth/login");
    });
});

module.exports = router;
