const mongoose = require('mongoose');

module.exports=()=>{
    mongoose.connect("mongodb://aditya:aditya@cluster0-shard-00-00.n34xe.mongodb.net:27017,cluster0-shard-00-01.n34xe.mongodb.net:27017,cluster0-shard-00-02.n34xe.mongodb.net:27017/?ssl=true&replicaSet=atlas-1o45yq-shard-0&authSource=admin&retryWrites=true&w=majority")
}