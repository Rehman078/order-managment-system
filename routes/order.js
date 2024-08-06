import express from "express";
const router = express.Router();
import orderModel from "../models/order.js";

router.get("/", async (req, res) => {
    try {
      const data = await orderModel.aggregate([
        {
          $match: {
            isDeleted: false,
          },
        },
        {
            $project: {
              isDeleted: 0,
              __v: 0,
            },
          },
        {
          $lookup: {
            localField: "customerId",
            from: "customers",
            foreignField: "_id",
            as: "Customer",
          },
        },
      ]);
      res.json({ message: "Fetched successfully", data });
    } catch ({ message }) {
      res.json({ message });
    }
  });

router.post("/", async (req, res) => {
    try {
      const data = await orderModel.create(req.body);
      res.status(200).json({ message: "Added successfully", data });
    } catch ({ message }) {
      res.json({ message });
    }
  });

router.patch("/:id", async(req, res) =>{
    try{
        const data = await orderModel.findByIdAndUpdate(req.params.id)
        res.status(200).json({message: "order updated successfully", data})
    }catch({message}){
        res.json({message})
    }
});

router.delete("/:id", async(req, res) =>{
    try{
        const data = await orderModel.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({message: "Product deleted successfully", data})
    }catch({message}){
        req.json({message})
    }
});
export default router;