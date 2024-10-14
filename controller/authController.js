import userModel from "../models/userModel.js";
import { hashPass } from "../helper/authHelper.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        if (!name) {
            return res.send({ error: "Name is required" });
        }
        if (!email) {
            return res.send({ error: "Email is required" });
        }
        if (!password) {
            return res.send({ error: "Password is required" });
        }
        if (!phone) {
            return res.send({ error: "Phone Number is required" });
        }
        const exisitingUser = await userModel.findOne({ email });

        if (exisitingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already a User Plz Login',
            })
        }

        const hashedPass = await hashPass(password)

        const user = await new userModel({ name, email, password, phone }).save()
        res.status(201).send({
            success: true,
            message: 'User Added Successfully',
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        });
    }
};