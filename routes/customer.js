import express from "express";
const router = express.Router();
import customerModel from "../models/customer.js";

router.get("/", async(req, res)=>{
    try{
        const data = await customerModel.find();
        res.json({message:"All Data Fetch Successfully" ,data});
    } catch({message}){
        res.json({message});
    }    
});

router.post("/", async (req, res) => {
    try {
      const data = await customerModel.create(req.body);
      res.status(200).json({ message: "Added successfully", data });
    } catch ({ message }) {
      res.json({ message });
    }
  });

router.patch("/:id", async(req, res) =>{
    try{
        const data = await customerModel.findByIdAndUpdate(req.params.id)
        res.status(200).json({message: "customer updated successfully", data})
    }catch({message}){
        res.json({message})
    }
});

router.delete("/:id", async(req, res) =>{
    try{
        const data = await customerModel.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({message: "customer deleted successfully", data})
    }catch({message}){
        req.json({message})
    }
});
export default router;