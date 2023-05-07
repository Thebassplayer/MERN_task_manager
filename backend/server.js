const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const taskRoutes = require("./routes/taskRoutes");
const getCurrentDateTime = require("./helpers/getActualTime");

//Init express
const app = express();

//PORT
const PORT = process.env.PORT || 5002;

//Routes
app.get("/", (req, res) => {
  res.send("Hola Raul");
});

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(` - Request date: ${getCurrentDateTime()} - `); // Output: dd/mm/yyyy
  next();
});
app.use("/api/tasks", taskRoutes);

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
