require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth.route");
const jobsRouter = require("./routes/jobs.route");
const applicationsRouter = require("./routes/applications.route");

app.use("/api/auth", authRouter);
app.use("/api/jobs", jobsRouter);
app.use("/api/applications", applicationsRouter);

module.exports = app;
