const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();
const router = express.Router();

const storage = multer.diskStorage({
   destination: "./public/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myImage");

const obj =(req,res) => {
   console.log("nigga")
   upload(req, res, () => {
      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);//Here you get file.
      res.send({message:"uploaded successfully"})
      /*Now do where ever you want to do*/
   });
}

router.post("/upload", obj);

app.use(router);

app.get("/",(req,res)=>{
   return res.send("<p>hello!</p>");
});

app.listen(5000,()=>{
    console.log("app listen")
})