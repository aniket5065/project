const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const captainSchema = new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required : true,
            minlength: [3, "first name must be at least 3 characters long"],
        },
        lastname:{
            type: String,
            minlength: [3, "last  name must be at least 3 characters long"],        

        },
    },
    email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            minlength: [5, "Email musst be at least 5 characters"],
            match: [/\S+@\S+\.\S+/, 'is invalid'],
    },

    password:{
            type :String,
            required: true,
            select: false,


    },

    socketId:{
        type: String,
    },

    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },

    vehicle:{
        color: {
            type: String,
            required: true,
            minlength: [3, "Color must be at least 3 characters long"],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate must be at least 3 characters long"],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'moto', 'auto'],
        }
    },

    location: {
      
        lng: {
            type: Number,
        },
        ltd: {
            type: Number,
        }
    }

    
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}



const captainModel = mongoose.model('Captain', captainSchema);
module.exports = captainModel;
