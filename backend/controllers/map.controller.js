const mapsService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getAddressCordinates = async (req, res, next) => {
  // Validate request query parameters
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { address } = req.query;
    const coordinates = await mapsService.getAddressCordinates(address);
    return res.status(200).json({
      status: true,
      message: "Coordinates fetched successfully",
      data: coordinates
    });
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return res.status(404).json({
      status: false,
      message: "Coordinates not fetched"
    });
  }
};


module.exports.getDistanceAndTime = async (req, res, next) => {
  try {
    // Validate request query parameters
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;
    const distanceAndTime = await mapsService.getDistanceAndTime(origin, destination);
    return res.status(200).json(distanceAndTime);

  }catch (error) {  
    console.log(error);
    res.status(500).json({message: "Internal server error"});
  }
}


module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
  try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { input } = req.query;
    const suggestions = await mapsService.getAutoCompleteSuggestions(input);

    res.status(200).json(suggestions);
  }catch (error) {
    console.error("Error fetching autocomplete suggestions:", error);
    return res.status(500).json({
      status: false,
      message: "Unable to fetch suggestions"
    });
  }
}