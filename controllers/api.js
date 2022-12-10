const Food = require("../models/fooditems")
const fs = require("fs");

module.exports = class API {
      //create a post
      static async createPost(req,res){
        console.log(req.body)
       const post = req.body;
       const imageName = req.file.filename;
       post.image = imageName;
       console.log(post)
       try {
        await Food.create(post);
        res.status(201).json({message: 'Post created successfully!'})
       } catch (error) {
        res.status(400).json({message: 'error.message'})
       }
    }
    //fetch all post
    static async fetchAllPost(req,res){
      try {
        const posts = await Food.find();
        res.status(200).json(posts);
        
      } catch (error) {
        res.status(404).json({message:error.message})
      }
    }
      //fetch post by ID
      static async fetchPostByID(req, res) {
        const id = req.params.id;
        try {
          const product = await Food.findById(id);
          res.status(200).json(product);
        } catch (err) {
          res.status(404).json({ message: err.message });
        }
      }

  
    
      //Update a post
      static async updatePost(req,res){
        const id = req.params.id;
        let newImage = "";
        if (req.file) {
          newImage = req.file.filename;
          try {
            fs.unlinkSync("./uploads/" + req.body.oldImage);
          } catch (err) {
            console.log(err);
          }
        } else {
          newImage = req.body.oldImage;
        }
        const newFood = req.body;
        newFood.image = newImage;
    
        try {
          await Food.findByIdAndUpdate(id, newFood);
          res.status(200).json({ message: "Food Item Updated Successfully!" });
        } catch (err) {
          res.status(404).json({ message: err.message });
        }
    }
      //Delete a post
      static async deletePost(req, res) {
        const id = req.params.id;
        try {
          const result = await Food.findByIdAndDelete(id);
          if (result.image != "") {
            try {
              fs.unlinkSync("./uploads/" + result.image);
            } catch (error) {
              console.log(error);
            }
          }
          res.status(200).json({ message: "Food Item deleted Successfully!" });
        } catch (error) {
          res.status(404).json({ message: error.message });
        }
      }
};