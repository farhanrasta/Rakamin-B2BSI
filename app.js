const express = require("express");
const bodyParser =  require("body-parser");
const mongoose = require("mongoose");
const mainRoutes = require("./routes/mainRoutes");

const app = express(); 
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:")); 
db.once("open", function () {
    console.log("Connected to MongoDB");
});

// Routes
app.use("/api", mainRoutes);

// Start server
app.listen(port, () = {
    console.log('Server berjalan di http://localhost: ${port}');
});