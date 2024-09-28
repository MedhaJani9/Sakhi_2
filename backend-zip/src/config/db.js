const mongoose = require("mongoose")

// const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
// const mongoBbUrl = 'mongodb+srv://sakhi-admin:Ri@220203@cluster0.d7avn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoDbUrl = 'mongodb+srv://MedhaJani:7rGMU9HrEd7zhRFY@cluster0.5qfnq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}