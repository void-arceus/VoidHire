const jobValidator = require("../validators/job.validator");

async function validateJob(req, res, next) {
    try {
        const { jobdata } = req.body;
        const result = jobValidator.validateJobData(jobdata);
        if (result.status === false) {
            return result;
        }
        next();
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

module.exports = { validateJob };
