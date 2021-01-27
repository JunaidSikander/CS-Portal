import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB Connected ${connection.connection.host}`);
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
};

export default connectDB;