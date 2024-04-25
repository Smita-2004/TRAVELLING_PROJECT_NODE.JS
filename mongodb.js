const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://smita23tiwari008:smita23@cluster0.svxs0eo.mongodb.net/")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})
const LogInSchema=new mongoose.Schema({
    
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    }
    
})
const collection=new mongoose.model("Collection2",LogInSchema);

module.exports=collection
