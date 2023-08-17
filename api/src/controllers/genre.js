const axios = require('axios');
const { Router } = require('express');
const { Genre } = require('../db');
const { API_KEY } = process.env;

const router = Router();

const getAllGenres = async (req, res) => {
    try {
        const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const nameGenres = genresApi.data.results;
        for (const g of nameGenres) {
            await Genre.findOrCreate({
                where: {
                    name: g.name,
                }
            })
        };
        const allGenres = await Genre.findAll();
        res.status(200).json(allGenres)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

router.get('/', getAllGenres);

module.exports = router;