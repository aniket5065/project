const axios = require("axios");
const captainModel = require('../models/captain.model');



module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAP_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[ 0 ].geometry.location;
            return {
                lng: location.lat,
                ltd: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceAndTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error("Origin and destination are required.");
    }
    const apiKey = process.env.GOOGLE_MAP_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;


    try {
        const response = await axios.get(url);
        if(response.data.status === "OK"){

            if(response.data.rows[0].elements[0].status !== "OK"){
                throw new Error("Unable to get distance and time for the provided locations.");
            }


            return response.data.rows[0].elements[0];
        }else{
            console.error("Error fetching distance and time:", response.data.error_message);
            throw new Error("Unable to get distance and time.");
        }

    }catch (error) {
        console.error("Error fetching distance and time:", error);
        throw error;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input) {
        throw new Error("query is required.");
    }

    const apiKey = process.env.GOOGLE_MAP_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    try{
        const response = await axios.get(url);
        if(response.data.status === "OK"){
            return response.data.predictions;
        }else{
            console.error("Error fetching autocomplete suggestions:", response.data.error_message);
            throw new Error("Unable to get autocomplete suggestions.");
        }
    }catch (error) {
        console.error("Error fetching autocomplete suggestions:", error);
        throw error;
    }
}
module.exports.getCaptainsInTheRadius = async (lng, lat, radius) => {
    
    if (!lng || !lat || !radius) {
        throw new Error("Longitude, latitude, and radius are required.");
    }
    const captains = await captainModel.find({
       
        location: {
            
            $geoWithin: {
                $centerSphere: [ [ lng, lat ], radius / 6371 ] 
                
            }
        }
    })
    return captains;
}





