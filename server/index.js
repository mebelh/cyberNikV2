const express = require("express");
const path = require("path");

const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongodb-session")(session);
const bodyParser = require("body-parser");

const coursesRoute = require("./routes/courses");
const authRoute = require("./routes/auth");

const MONGO_URI =
    "mongodb+srv://artem:12345@cluster0.6bskz.mongodb.net/CyberIz?retryWrites=true&w=majority";

const store = new MongoStore({
    uri: MONGO_URI,
    collection: "sessions",
});

const PORT = 3001;

app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views", "img")));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/courses", coursesRoute);
app.use("/auth", authRoute);

app.use(
    session({
        secret: "hgydl dsjg,da17",
        resave: true,
        saveUninitialized: true,
        store,
    })
);

app.use("/courses", coursesRoute);

// const User = require("./models/User");
// const bcrypt = require("bcrypt");

const start = async () => {
    try {
        mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        // const admin = await User.findOne();
        // if (!admin) {
        //     const user = new User({
        //         login: "admin",
        //         password: await bcrypt.hash("admin", 12),
        //     });
        //     await user.save();
        // }
        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT}.`);
        });
    } catch (e) {
        if (e) {
            console.log(e);
        }
    }
};
start();
