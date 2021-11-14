const mongoose = require('mongoose');

const password = "smiu%40123";
const dbname = "crud";



const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(`mongodb+srv://MubashirAhmed:${password}@cluster0.yrrns.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(`mongo error: ${err}`);
        process.exit(1);
    }
}

module.exports = connectDB