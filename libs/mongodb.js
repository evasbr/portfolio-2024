// lib/mongodb.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// file .env ada di root dan file ini ada di folder models
dotenv.config({path: '../.env'});

const options = {
    minPoolSize: 1,
    maxPoolSize: 10,
};

const connectDB = async () => {
    if (mongoose.connection.readyState === 0) { // 0 means disconnected
        try {
            const uri = process.env.MONGODB_URL;
            console.log(uri);
            await mongoose.connect(uri, options);
            console.log("Connected to database");
        } catch (error) {
            console.error("Database connection error:", error);
        }
    } else {
        console.log("Already connected to database");
    }
};

export default  connectDB ;