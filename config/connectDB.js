const mongoose = require("mongoose")
const URI = "mongodb://0.0.0.0:27017/auguryTech"

const connectDB = async ()=>{
    await mongoose.connect(URI).then(con => console.log("connected to auguryTech database"))
}

module.exports = connectDB