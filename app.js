//imports
const mongoose = require('mongoose');
require('dotenv').config();
const express  = require('express');
const cors = require('cors');
// require("./db/conn");
const adminDetail = require("./models/admindetail");




const app = express();
const port = process.env.PORT|| 5000;

//Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static("uploads"));

//database connection
require("./db/conn");

//Routes

app.use("/api/post", require("./routes/routes"));

app.post("/api/adminlogin", async (req, res) => {
    console.log(req.body);
    try {
      const name = req.body.name;
      const password = req.body.password;
      const admin = await adminDetail.findOne({ name: name });
      if (admin.password === password) {
        res.status(201).json({message: 'Admin successfully Logged In!'})
      } else {
        res.status(401).json({message: 'email or password is not matching'})
      }
    } catch (e) {
        res.status(403).json({message:'Invalid email or password'})
    }
  });



app.listen(port, () => {
    console.log(`The server is listining at http://localhost:${port}`);
  });