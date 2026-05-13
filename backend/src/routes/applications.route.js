const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const applicationMiddleware = require("../middleware/applications.middleware");
const applicationsController = require("../controller/applications.controller");

router.post(
    "/apply",
    authMiddleware.authUser,
    applicationMiddleware.validateApplication,
    applicationsController.applyToJob,
);

router.get(
    "/myapplications",
    authMiddleware.authUser,
    applicationsController.getApplications,
);

router.get(
    "/applicationdetail/:jobid",
    authMiddleware.authUser,
    applicationsController.getApplicationDetail,
);

module.exports = router;
