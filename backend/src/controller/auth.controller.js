// auth.controller.js
const pool = require("../db/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function Register(req, res) {
    try {
        const {
            username,
            email,
            password,
            confirmPassword,
            role = "user",
        } = req.body;
        if (!username || !email || !password || !confirmPassword) {
            return res
                .status(401)
                .json({ status: false, message: "Missing Credentials" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // add data on database
        const registerUser = await pool.query(
            "INSERT INTO users(username, email, password, role) VALUES($1, $2, $3, $4) RETURNING *",
            [username, email, hashedPassword, role],
        );

        // then create cookie and set jwt
        const token = jwt.sign(
            {
                id: registerUser.rows[0].id,
                role: registerUser.rows[0].role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" },
        );
        res.cookie("Token", token);

        return res.status(201).json({
            status: true,
            message: "User registered Successfully",
        });
    } catch (err) {
        console.error(err);
        if (err.code === "23505") {
            return res.status(409).json({
                status: false,
                message: "Email is already linked to other account",
            });
        }
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
        });
    }
}

async function Login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || email.trim() === "") {
            return res
                .status(401)
                .json({ status: false, message: "Email Address is required" });
        }
        if (!password || password.trim() === "") {
            return res
                .status(401)
                .json({ status: false, message: "Password is required" });
        }

        // check for email and password in database
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [
            email,
        ]);
        if (user.rowCount === 0) {
            return res.status(404).json({
                status: false,
                message: "Invalid Email address",
            });
        }

        // verfiy hashed password
        const verify = await bcrypt.compare(password, user.rows[0].password);
        if (!verify) {
            return res
                .status(401)
                .json({ status: false, message: "Invalid Password" });
        }

        const token = jwt.sign(
            { id: user.rows[0].id, role: user.rows[0].role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" },
        );
        res.cookie("Token", token);
        res.status(200).json({
            status: true,
            message: "Logged In Successfully",
        });
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ status: false, message: "Internat Server Error" });
    }
}

module.exports = { Register, Login };
