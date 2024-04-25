
const express = require('express');
const app = express();
const path = require('path');
const collection=require('./mongodb');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "/")));

// Define routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname,'signup.html'));
});


// Your other routes...
app.post("/signup",async(req,res)=>{
    const data={
        
        email:req.body.email,
        password:req.body.password,
        
    }
await collection.insertMany([data])
res.sendFile(path.join(__dirname, 'signup_successful.html'));
})

app.post("/login",async(req,res)=>{
    try {
        const check=await collection.findOne({email:req.body.email})
        if(check.password===req.body.password){
            res.sendFile(path.join(__dirname, 'homepage.html'));

        }
        else{
            res.send("Wrong password")
        }
    } catch{
        res.send("Wrong details")
    }
    
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});