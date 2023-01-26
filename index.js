/*  const express= require('express');
const app = express();
app.get("/",(req,resp)=>{
    resp.send("app is not at place...")
});

app.listen(7676);   */

const express= require('express');
const cors = require ("cors");
require('./db/Config');
const User = require("./db/User");
const Product = require("./db/Product");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async (req, resp) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
       let user = await User.findOne(req.body).select("-password");
       if (user) {
          resp.send(user)
       } else {
          resp.send({ result: 'invalid User Name' })
       }
    } else {
       resp.send({ result: 'invalid User Name' })
    }
 
 
 })

 app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result);
 })

 app.post("/add-student", async (req,resp)=>{
   let product = new Product(req.body);
   let result = await product.save();
   resp.send(result)
})

app.get("/student",async (req,resp)=>{
   let products = await Product.find();
   if(products.length>0){
      resp.send(products)
   }else{
      resp.send({result:"No Student found"})
   }
})
app.listen(7676);  
