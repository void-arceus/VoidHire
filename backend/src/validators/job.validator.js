function validateJobData(jobData) {
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
    } = jobData;

    if (!companyname || companyname.trim() === "")
        return { status: false, message: "Company name is required" };
    if (!jobtitle || jobtitle.trim() === "")
        return { status: false, message: "Job title is required" };
    if (!createdat || createdat.trim() === "")
        return { status: false, message: "Date created is required" };
    if (!location || location.trim() === "")
        return { status: false, message: "Location is required" };
    if (!salary || salary.trim() === "")
        return { status: false, message: "Salary range is required" };
    if (!aboutcompany || aboutcompany.trim() === "")
        return { status: false, message: "About company is required" };
    if (!jobdescription || jobdescription.trim() === "")
        return { status: false, message: "Job Description is required" };

    if (requirements.length === 0)
        return { status: false, message: "Requirements are required" };
    if (responsibilities.length === 0)
        return { status: false, message: "Responsibilities are required" };
    if (perks.length === 0)
        return { status: false, message: "Perks are required" };

    if (!experience || experience.trim() === "")
        return { status: false, message: "Experience is required" };

    return { status: true };
}

module.exports = { validateJobData };
