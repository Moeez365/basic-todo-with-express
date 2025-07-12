import mongoose from "mongoose";

export const mongoDb = async() =>{
    try {
       await mongoose.connect('mongodb+srv://moeez123:moeez123@cluster0.1d6jy8r.mongodb.net/todo')
    } catch (error) {
        console.log("db connection error::::", error)
    }
}