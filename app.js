const express=require('express');
const mongoose= require('mongoose');
const app=express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));//new
app.use(bodyParser.json());//new



const User=require("./user")
app.use(express.json());
const customMiddleware= (req,res,next)=>{
    console.log("welcome");
    next();
}
app.use(customMiddleware);

app.get("/",(req,res)=>{
    console.log("first");
    res.send("First Request !!");
});

app.get("/users",(req,res)=>{
    User.find()
    .then(result=>{
        res.status(200).json({
result
        });
    })
    .catch(err=>{
        
        console.log(err);
        res.send(500).json({
            error:err
        })
    });
    

});

app.post("/create_user",async (req,res)=>{

    try{
        const myuser=new User(req.body);
        await myuser.save()
        res.send(`create user${req.body.name}`);
    }
    catch(error){
        res.send({message:err});
    }
    //console.log(req.body.name);
   
});

mongoose.connect("mongodb+srv://tutorial:xP9mB3ZDfD37ukCj@mongodb-tutorial.g9gjp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{    useNewUrlParser: true,useUnifiedTopology: true,},
(req,res)=>{
console.log("connected to the database");
}
);

app.listen(3000,()=>{
console.log("Listening to 3000");

});

