//external imports
const mongoose= require("mongoose");
const PORT = process.env.PORT || 3000
require('dotenv').config({ path: '.env' })

mongoose.set("strictQuery", false);
async function dbConnect() {
    mongoose
        .connect(
            process.env.DB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                //useCreateIndex: true,
            }
        )
        .then(()=>{
            console.log("Successfully connected to MongoDB Atlas");
        })
        .catch((error) =>{
            console.log("Unable to connect to MongoDB Atlas");
            console.error(error);    
        });
}

module.exports= dbConnect;