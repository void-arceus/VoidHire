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
    res.cookie("Token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      status: true,
      message: "Logged In Successfully",
      data: {
        role: user.rows[0].role,
      },
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ status: false, message: "Internat Server Error" });
  }
}

async function Logout(req, res) {
  try {
    // check if we have any user
    const token = req.cookies.Token;
    if (!token) {
      return res.status(400).json({
        status: false,
        message: "Bad Request, user not logged in.",
      });
    }
    res.clearCookie("Token");
    return res
      .status(200)
      .json({ status: true, message: "Logged Out Successfully" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error" });
  }
}

async function Me(req, res) {
  try {
    // get current user
    const token = req.cookies.Token;
    if (!token) {
      return res.status(404).json({ status: false, message: "No User found" });
    }
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    if (!verify) {
      return res.status(401).json({ status: false, message: "Unauthorized" });
    }

    // else get user data from db
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      verify.id,
    ]);
    if (user.rows.length === 0) {
      return res
        .status(404)
        .json({ status: false, message: "User Not Found!" });
    }
    return res.status(200).json({
      status: true,
      message: "User Data fetched successfully",
      data: {
        username: user.rows[0].username,
        email: user.rows[0].email,
        role: user.rows[0].role,
      },
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error" });
  }
}

module.exports = { Register, Login, Logout, Me };
