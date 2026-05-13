const pool = require("../db/db");

async function validateApplication(req, res, next) {
    try {
        const { applicationData } = req.body;
        if (!applicationData) {
            return res
                .status(401)
                .json({ status: false, message: "Missing Data" });
        }

        // validate job id
        const job = await pool.query("SELECT * FROM jobs WHERE id = $1", [
            applicationData.jobid,
        ]);

        if (job.rows.length === 0) {
            return res
                .status(404)
                .json({ status: false, message: "Job not found" });
        }
        next();
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

module.exports = { validateApplication };
