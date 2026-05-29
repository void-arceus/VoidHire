const pool = require("../db/db");

async function PostJob(req, res) {
    try {
        const { jobdata } = req.body;
        const {
            companyname,
            jobtitle,
            location,
            salary,
            aboutcompany,
            jobdescription,
            requirements,
            skills,
            responsibilities,
            perks,
            experience,
        } = jobdata;

        const job = await pool.query(
            "INSERT INTO Jobs(companyname, jobtitle, location, salary, aboutcompany, jobdescription, requirements, responsibilities, perks, experience, skills, recruiterid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
            [
                companyname,
                jobtitle,
                location,
                salary,
                aboutcompany,
                jobdescription,
                requirements,
                responsibilities,
                perks,
                experience,
                skills,
                req.user.id,
            ],
        );
        return res.status(201).json({
            status: true,
            message: "Job Posted Successfully",
            data: req.body,
        });
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

async function getAllJobs(req, res) {
    try {
        const jobid = req.query.jobid;
        if (jobid) {
            const job = await pool.query("SELECT * FROM jobs WHERE id = $1", [
                jobid,
            ]);
            if (job.rows.length === 0) {
                return res.status(404).json({
                    status: false,
                    message: "Job Details not found",
                });
            }
            return res.status(200).json({
                status: true,
                message: "Jobs Details Fetched successfully",
                data: job.rows,
            });
        }

        const jobsData = await pool.query(
            "SELECT * FROM jobs WHERE jobstatus='active'",
        );
        if (jobsData.rows.length === 0) {
            return res
                .status(404)
                .json({ status: false, message: "No Jobs Found!" });
        }
        return res.status(200).json({
            status: true,
            message: "Jobs fetched successfully",
            data: jobsData.rows,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
        });
    }
}

async function getRecruiterJobs(req, res) {
    try {
        // get recruiter id
        const jobs = await pool.query(
            "SELECT * FROM jobs WHERE recruiterid = $1",
            [req.user.id],
        );
        if (jobs.rows.length === 0) {
            return res
                .status(404)
                .json({ status: false, message: "No jobs found" });
        }
        return res.status(200).json({
            status: true,
            message: "Jobs Fetched Successfully",
            data: jobs.rows,
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

async function updateJobStatus(req, res) {
    try {
        const { status } = req.body;
        const { jobid } = req.params;
        const allowedStatus = ["active", "closed", "deleted"];
        if (!allowedStatus.includes(status)) {
            return res
                .status(400)
                .json({ status: false, message: "Invalid Job Status" });
        }
        const deleteJob = await pool.query(
            "UPDATE jobs SET jobstatus=$1 WHERE id=$2 AND recruiterid = $3 RETURNING*",
            [status, jobid, req.user.id],
        );

        if (deleteJob.rows.length === 0) {
            return res
                .status(404)
                .json({ status: false, message: "Failed To delete the job" });
        }
        return res
            .status(200)
            .json({ status: true, message: "Job Status Updated Successfully" });
    } catch (err) {
        console.error(err);
        if (err.code === "22PO2") {
            return res.status(403).json({
                status: false,
                message: "Invalid Job or Recruiter Id",
            });
        }
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

async function saveJob(req, res) {
    try {
        const { jobid } = req.body;
        if (!jobid) {
            return res.status(400).json({
                status: false,
                message: "Bad Request missing JobId or UserId",
            });
        }
        // check if job id is valid
        const isValidJob = await pool.query(
            "SELECT * FROM jobs WHERE id = $1",
            [jobid],
        );
        if (isValidJob.rows.length === 0) {
            return res
                .status(404)
                .json({ status: false, messsage: "Job Not Found!" });
        }

        // save job
        await pool.query("INSERT INTO savedjobs(userid, jobid) VALUES($1,$2)", [
            req.user.id,
            jobid,
        ]);
        return res
            .status(201)
            .json({ status: true, message: "Job Saved Successfully" });
    } catch (err) {
        console.error(err);
        if (err.code === "23505") {
            return res.status(409).json({
                status: false,
                message: "You've already saved this job.",
            });
        }
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

async function getSavedJobs(req, res) {
    try {
        const jobs = await pool.query(
            "SELECT jobs.* FROM savedjobs JOIN jobs ON savedjobs.jobid = jobid WHERE savedjobs.userid = $1",
            [req.user.id],
        );
        if (jobs.rows.length === 0) {
            return res
                .status(404)
                .json({ status: false, message: "No Saved Jobs Found" });
        }
        return res.status(200).json({
            status: true,
            message: "Saved Jobs Fetched successfully",
            data: jobs.rows,
        });
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

module.exports = {
    PostJob,
    getAllJobs,
    getRecruiterJobs,
    updateJobStatus,
    saveJob,
    getSavedJobs,
};
