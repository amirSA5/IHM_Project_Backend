import mongoose from "mongoose";
const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-9o39vxv-shard-00-00.t22mieu.mongodb.net:27017,ac-9o39vxv-shard-00-01.t22mieu.mongodb.net:27017,ac-9o39vxv-shard-00-02.t22mieu.mongodb.net:27017/?ssl=true&replicaSet=atlas-rur6b9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;