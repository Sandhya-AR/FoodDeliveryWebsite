import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Sandhya:bKBTcdWAxjniI6k8@cluster0.awxsec5.mongodb.net/sezzato').then(()=>console.log("DB Connected"));
}