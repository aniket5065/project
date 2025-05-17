const mongoose = require('mongoose');



const rideSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },

    captain:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'captain',
        
    },

    pickup:{
        type: String,
        required: true,
        minlength: [3, "Pickup location must be at least 3 characters long"],
    },

    destination:{
        type: String,
        required: true,
        minlength: [3, "Destination location must be at least 3 characters long"],
    },

    fare:{
        type: Number,
        required: true,
    },


    status:{
        type: String,
        enum: ['pending', 'accepted','ongoing', 'completed', 'cancelled'],
        default: 'pending',
    },

    duration: {
        type: Number,
        
    },

    distance: {
        type: Number,
    },

    paymentID:{
        type: String,
    },

    orderID: {
        type: String,   
    },

    signature: {
        type: String,
    },

    otp:{
        type: String,
        selected: false,
        required: true,
    },


})

module.exports = mongoose.model('ride', rideSchema);