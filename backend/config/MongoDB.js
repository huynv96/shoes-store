import mongoose from "mongoose";
const connectDataBase = async() =>{
    try{
        // mongodb environment variables
        const dbConnectionURL = {
            'REMOTE_DB_URL': process.env.MONGODB_URI || 'mongodb://mongo:27017/shoesDatabase' //atlas url
        };
        const connection = await mongoose.connect(dbConnectionURL.REMOTE_DB_URL,
            {useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log('Connected to Mongo DB')
    }
    catch(error){
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
};
export default connectDataBase;