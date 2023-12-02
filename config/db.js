const {MongoClient} = require("mongodb")
const mongodbURL = "mongodb://localhost:27017"

const mongoserver = new MongoClient(mongodbURL)

const connection = async () => {
    try {
       
        console.log("connection successfully");
        await mongoserver.connect(); 
         
    }

    catch(err) {
        console.log(`Error occured in mongoDB connection ${err}`);
    }
}

const databaseName = mongoserver.db("Handson2")

module.exports = {connection, databaseName}

