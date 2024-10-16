import userModel from "../models/userModel.js";
import { comparePass, hashPass } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";

// POST - REGISTER
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // Validation checks
        if (!name) {
            return res.status(400).send({ error: "Name is required" });
        }
        if (!email) {
            return res.status(400).send({ error: "Email is required" });
        }
        if (!password) {
            return res.status(400).send({ error: "Password is required" });
        }
        if (!phone) {
            return res.status(400).send({ error: "Phone Number is required" });
        }

        // Check for existing user
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already a user. Please login.",
            });
        }

        // Hash password and create a new user
        const hashedPass = await hashPass(password);
        const user = new userModel({ name, email, password: hashedPass, phone });
        await user.save();

        // Success response
        res.status(201).send({
            success: true,
            message: "User added successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error,
        });
    }
};

// POST - LOGIN
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation checks
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Email and password are required",
            });
        }

        // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found, please register",
            });
        }

        // Compare password
        const match = await comparePass(password, user.password);
        if (!match) {
            return res.status(400).send({
                success: false,
                message: "Incorrect password",
            });
        }

        // Generate JWT token
        const token = await JWT.sign({ _id: user._id }, process.env.JWToken, { expiresIn: "5d" });

        // Success response
        res.status(200).send({
            success: true,
            message: "Login successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
};

//POST - Test

export const textController = (req,res) => {
    try {
        res.send("Protected")
    } catch (error) {
        console.log(error);
        res.send({error});
    }
}

