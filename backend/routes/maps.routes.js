const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/map.controller');
const {query} = require('express-validator')


router.get('/getAddressCordinates',
    query('address').isString().isLength({ min: 3 }).withMessage('Address must be at least 3 characters long'),
    
    authMiddleware.authUser, mapController.getAddressCordinates);
    

router.get('/get-distance-time',
    query('origin').isString().withMessage('Origin is required'),
    query('destination').isString().withMessage('Destination is required'),
    authMiddleware.authUser,
    mapController.getDistanceAndTime
);

router.get('/get-suggestions',
    query('input').isString().isLength({min: 3}),
    authMiddleware.authUser,
    mapController.getAutoCompleteSuggestions
);








module.exports = router;