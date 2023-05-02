const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const taskRoutes = require("./routes/taskRoutes");

//Init express
const app = express();

//PORT
const PORT = process.env.PORT || 5002;

//Routes
app.get("/", (req, res) => {
  res.send("Hola Raul");
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(taskRoutes);

//Start server
const startServer = async () => {
  try {
    //Connect to DB
    await connectDB();
    //Start server
    await app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
