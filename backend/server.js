const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


// middleware
app.use(cors());
app.use(express.json());


// uploads folder access
app.use("/uploads", express.static("uploads"));


// routes
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((error) => {
    console.log(error);
});


// server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});