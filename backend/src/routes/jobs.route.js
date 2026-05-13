const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const jobMiddleware = require("../middleware/jobs.middleware");
const jobController = require("../controller/jobs.controller");

router.post(
    "/postjob",
    authMiddleware.authRecruiter,
    jobMiddleware.validateJob,
    jobController.PostJob,
);

router.get("/alljobs", jobController.getAllJobs);

module.exports = router;
