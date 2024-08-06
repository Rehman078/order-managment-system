import express, { json } from "express"
import mongoose from "mongoose"
import customerRouute from "./routes/customer.js"
import paymentRoute from "./routes/payment.js"
import orderRoute from "./routes/order.js"
const app = express()
app.use(express.json())
const connection = mongoose.connection;
connection.once("connected", () => console.log("Database Connected ~"));

connection.on("error", (error) => console.log("Database Error: ", error));

mongoose.connect("mongodb://127.0.0.1:27017/order-managment-system", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use("/customer", customerRouute);
app.use("/payment", paymentRoute);
app.use("/order", orderRoute);
app.listen(3000,()=>console.log("app serve on port 3000"))