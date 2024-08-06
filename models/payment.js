import mongoose, { Types } from "mongoose";
const schema = mongoose.Schema({
customerId:{type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
paymentMethod:{type:String, required:true},
shippingMethod:{type:String, required:true},
isDeleted:{type:Boolean, default:false}
})
export default mongoose.model("Payment",schema);