import express from "express";

const userRoutes= express.Router();

userRoute.post("/register",(req,res) =>{
    const {name} = req.body;
    res.status(200).json({data:`Welcome ${name}`}) 
})

export default userRoutes