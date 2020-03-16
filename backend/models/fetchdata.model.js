const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomid:{
        type:Number,
        required: true,
        unique: true, 
    },

    roomname:{
        type:String,
        required: true,
        unique: true,
    },

    country:{
        type: String,
        required:true
    },

    city:{
        type: String,
        required: true
    },

    location:{
        type: String,
        required: true
    },

    address:{
        type:String,
        required: true
    },

    unit:{
        type: String,
        required: true
    },

    floor:{
        type: String,
        required: true
    },

    images:{
         data: Buffer, 
         contentType: String 
    },

    URL: 
    { 
        type: String, 
        createdDate: Date.now 
    }

},
);

const Room = mongoose.model('Rooms', roomSchema);

module.exports = Room;