const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');

async function getFare(pickup, destination) {

    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceAndTime = await mapService.getDistanceAndTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        moto: 8
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto: 1.5
    };



    const fare = {
        auto: Math.round(baseFare.auto + ((distanceAndTime.distance.value / 1000) * perKmRate.auto) + ((distanceAndTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceAndTime.distance.value / 1000) * perKmRate.car) + ((distanceAndTime.duration.value / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceAndTime.distance.value / 1000) * perKmRate.moto) + ((distanceAndTime.duration.value / 60) * perMinuteRate.moto))
    };

    return fare;

}


module.exports.createRide = async ({user, pickup, destination, vehicleType}) => {
    if(!user || !pickup || !destination || !vehicleType) {
        throw new Error('all fields are required');
        
    } 

    const fare = await getFare(pickup, destination);

    const ride = new rideModel({
        user,
        pickup,
        destination,
        fare: fare[vehicleType]
    });

   
    return ride;
}




