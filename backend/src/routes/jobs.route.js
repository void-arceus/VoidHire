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
router.get(
    "/myjobs",
    authMiddleware.authRecruiter,
    jobController.getRecruiterJobs,
);
router.patch(
    "/job/:jobid/status",
    authMiddleware.authRecruiter,
    jobController.updateJobStatus,
);

module.exports = router;
