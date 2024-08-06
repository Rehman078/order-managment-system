import mongoose, { Types } from "mongoose";
const schema = mongoose.Schema({
customerId:{type:Number, required:true},
name:{type:String, required:true, unique:true},
shippingAddress:{type:String, required:true},
email:{type:String, required:true},
isDeleted:{type:Boolean, default:false}
})
export default mongoose.model("Customer",schema);