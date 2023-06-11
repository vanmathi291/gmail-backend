
import mongoose from "mongoose";


const connection = () =>{
    const DB_URI = `mongodb://vanmathibala:vanmathi@ac-fo9ft48-
    shard-00-00.iwf8des.mongodb.net:27017,ac-fo9ft48-shard-00-01
    .iwf8des.mongodb.net:27017,ac-fo9ft48-shard-00-02.iwf8des.
    mongodb.net:27017/?ssl=true&replicaSet=atlas-epu8wn-
    shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log('Database connected successfully');
    }catch (error){
        console.log('Error while connecting with the database ',error.message);
    }
}

export default connection;