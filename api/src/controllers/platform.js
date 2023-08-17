const { Router } = require('express');
const axios = require("axios");
const { Platform } = require('../db')
const { API_KEY } = process.env;

const router = Router();

const getPlatforms = async (req, res) => {
    try {
        const platformsApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        const platforms = platformsApi.data.results;
        for (const p of platforms) {
            await Platform.findOrCreate({
                where: {
                    name: p.name,
                }
            })
        };
        const platformsDb = await Platform.findAll();
        res.status(200).json(platformsDb);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

router.get('/', getPlatforms);

module.exports = router;