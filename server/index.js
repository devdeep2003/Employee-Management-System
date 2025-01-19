import express from 'express'
import mongoose from 'mongoose'



const app = express();

    mongoose.connect('mongodb+srv://deepchakraborty200318:W-q9+bbtJRb$_8K@cluster0.2zouj.mongodb.net/EmployeeManagementSystem')


const userSchema = new mongoose.Schema({
    name : String,
    age : Number
})

const userModel = mongoose.model("employee" , userSchema);



app.use(express.json());

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})