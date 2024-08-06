const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://iamvbenz:22092004@cluster0.mbiqubl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    serverSelectionTimeoutMS: 30000
  }).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});
  
  

let c = 12;


const User = mongoose.model("Users", {name: String, email:String, password:String});

const user = new User({
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
})

user.save()
console.log("hello")