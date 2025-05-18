import mongoose from "mongoose";

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = { conn: null , promise: null}
}

async function connectDB() {
    if(cached.coon){
        return cached.conn
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: false
        }

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/devitzz`, opts).then(mongoose => {
            return mongoose
        })
    }
}