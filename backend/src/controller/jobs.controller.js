const pool = require("../db/db");

async function PostJob(req, res) {
    try {
        const { jobdata } = req.body;
        const {
            companyname,
            jobtitle,
            createdat,
            location,
            salary,
            aboutcompany,
            jobdescription,
            requirements,
            responsibilities,
            perks,
            experience,
        } = jobdata;

        const job = await pool.query(
            "INSERT INTO Jobs(companyname, jobtitle, createdat, location, salary, aboutcompany, jobdescription, requirements, responsibilities, perks, experience, recruiterid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
            [
                companyname,
                jobtitle,
                createdat,
                location,
                salary,
                aboutcompany,
                jobdescription,
                requirements,
                responsibilities,
                perks,
                experience,
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
        const jobsData = await pool.query("SELECT * FROM jobs");

        if (jobsData.rows.length === 0) {
            return res
                .status(404)
                .json({ status: false, message: "No Jobs Found!" });
        }
        return res.status(200).json({
            status: true,
            message: "Jobs fetched successfully",
            jobs: jobsData.rows,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
        });
    }
}

module.exports = { PostJob, getAllJobs };
