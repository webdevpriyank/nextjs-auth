import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        
        connection.on('connected', () => {
            console.log('MongoDB Connected!')
        });

        connection.on('error', (error) => {
            console.log('MongoDB Connection Error. Please make sure MongoDB is Running.' + error);
            process.exit();
        })
    } catch (error) {
        console.log('Something went wrong!');
        console.log(error);
    }    
}