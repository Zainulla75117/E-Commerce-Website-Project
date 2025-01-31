import JWT from "jsonwebtoken"
import userModel from "../models/userModel.js";

//prtecting routes

export const requireSignin = async (req,res,next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWToken);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
};

//admin

export const isAdmin = async (req,res,next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message: 'Unauthorized access'
            })
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            error,
            message: "error in admin mw"
        })
    }
}