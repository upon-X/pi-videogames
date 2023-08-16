const axios = require('axios');
const { Router } = require('express');
const { Genre } = require('../db');
const { API_KEY } = process.env;

const router = Router();

const getAllGenres = async (req, res) => {
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const nameGenres = genresApi.data.results;
    nameGenres.forEach(async (g) => {
        await Genre.findOrCreate({
            where: {
                name: g.name,
            }
        })
    });
    const allGenres = await Genre.findAll();
    res.status(200).json(allGenres)
}

router.get('/', getAllGenres);

module.exports = router;