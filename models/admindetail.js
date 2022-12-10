const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password:{
    type: String,
  },  
});

const adminlogindetail = new mongoose.model("adminlogindetail",AdminSchema);
module.exports = adminlogindetail;