const jwt = require("jsonwebtoken");
const authValidation = require("../validators/auth.validator");

function RegisterValidation(req, res, next) {
    try {
        const { username, email, password, confirmPassword } = req.body;
        const validate = authValidation.ValidateRegister(
            username,
            email,
            password,
            confirmPassword,
        );
        if (validate.status === false) {
            return res.status(401).json(validate);
        }
        next();
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

async function authRecruiter(req, res, next) {
    try {
        const token = req.cookies.Token;
        if (!token) {
            return res.status(401).json({
                status: false,
                message: "Unauthenticated",
            });
        }
        // verfiy jwt token
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        if (!verify) {
            return res
                .status(401)
                .json({ status: false, message: "Unauthenticated" });
        }
        if (verify.role === "user") {
            return res.status(403).json({
                status: false,
                message: "Unauthorized",
            });
        }
        req.user = verify;
        next();
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

async function authUser(req, res, next) {
    try {
        const token = req.cookies.Token;
        if (!token) {
            return res.status(401).json({
                status: false,
                message: "Unauthenticated",
            });
        }
        // verfiy jwt token
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        if (!verify) {
            return res
                .status(401)
                .json({ status: false, message: "Unauthenticated" });
        }
        if (verify.role !== "user") {
            return res.status(403).json({
                status: false,
                message: "Unauthorized",
            });
        }
        req.user = verify;
        next();
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

module.exports = { RegisterValidation, authRecruiter, authUser };
