import mongoose, { Types } from "mongoose";
const schema = mongoose.Schema({
customerId:{type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
orderId:{type:Number,required:true},
productName:{type:String, required:true},
qunatity:{type:String, required:true},
isDeleted:{type:Boolean, default:false}
})
export default mongoose.model("Order",schema);