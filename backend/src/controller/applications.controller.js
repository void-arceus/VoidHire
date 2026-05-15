const pool = require("../db/db");

async function applyToJob(req, res) {
    try {
        const { applicationData } = req.body;
        const application = await pool.query(
            "INSERT INTO applications(jobid, userid) VALUES($1, $2)",
            [applicationData.jobid, req.user.id],
        );
        return res
            .status(201)
            .json({ status: true, message: "Application sent successfully" });
    } catch (err) {
        console.error(err);
        if (err.code === "23505") {
            return res.status(409).json({
                status: false,
                message: "You've already applied to this job",
            });
        }
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

async function getUserApplications(req, res) {
    try {
        const applications = await pool.query(
            "SELECT * FROM applications WHERE userid = $1",
            [req.user.id],
        );
        if (applications.rows.length === 0) {
            return res
                .status(404)
                .json({ status: false, message: "No Applications found" });
        }
        return res.status(200).json({
            status: true,
            message: "Applications fetched successfully",
            data: applications.rows,
        });
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

async function getApplicationDetail(req, res) {
    try {
        const jobid = req.params.jobid;
        if (!jobid) {
            return res
                .status(401)
                .json({ status: false, message: "Job id is requried" });
        }
        const jobData = await pool.query("SELECT * FROM jobs WHERE id = $1", [
            jobid,
        ]);
        if (jobData.rows.length === 0) {
            return res
                .status(404)
                .json({ status: false, message: "Job not found" });
        }
        return res.status(200).json({
            status: true,
            message: "Job Detail fetched successfully",
            data: jobData.rows,
        });
    } catch (err) {
        console.error(err);
        if (err.code === "22P02") {
            return res
                .status(403)
                .json({ status: false, message: "Invalid Job Id" });
        }
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

// get applications for certain job (recruiter only)
async function getApplicants(req, res) {
    try {
        const { jobid } = req.params;
        const applicants = await pool.query(
            `SELECT applications.id AS application_id,
                users.id,
                users.username,
                users.email,
                users.resume
            FROM applications
            JOIN users
            ON applications.userid = users.id
            WHERE applications.jobid = $1`,
            [jobid],
        );

        // if no applicants are found
        if (applicants.rows.lengh === 0) {
            return res
                .status(404)
                .json({ status: false, message: "No Application Found" });
        }

        return res.status(200).json({
            status: true,
            message: "Applications Fetched Successfully",
            data: applicants.rows,
        });
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

module.exports = {
    applyToJob,
    getUserApplications,
    getApplicationDetail,
    getApplicants,
};
