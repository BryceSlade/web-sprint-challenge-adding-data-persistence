const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getResources()
        res.json(resources)
    }
    catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const resource = await Resource.newResource(req.body)
        res.json(resource)
    }
    catch (err) {
        next(err)
    }
    
})

module.exports = router