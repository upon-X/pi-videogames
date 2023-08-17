const { Router } = require('express');
const axios = require('axios');
const { Videogame, Genre, Platform } = require('../db');
const { API_KEY } = process.env;
const router = Router();

const getGames = async () => {
    let apiGames = [];
    const url1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`)
    const url2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
    const url3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)
    const url4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)
    const url5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)
    apiGames = url1.data.results.concat(
        url2.data.results,
        url3.data.results,
        url4.data.results,
        url5.data.results,
    );

    apiGames = apiGames.map((game) => {
        const platforms = game.platforms.map((g) => g.platform);
        return {
            id: game.id,
            name: game.name,
            image: game.background_image,
            genres: game.genres,
            platforms: platforms,
            rating: game.rating,
            released: game.released,
        };
    });
    return apiGames;
};

const dataBase = async () => {
    return await Videogame.findAll({
        include: [Genre, Platform],
    });
};
const getAllGames = async () => {
    const apiData = await getGames();
    const dbInfo = await dataBase();
    const total = apiData.concat(dbInfo);
    return total;
};

router.get("/", async (req, res) => {
    const { name } = req.query;
    let totalGames = await getAllGames();
    if (name) {
        let searchGame = totalGames.filter((game) =>
            game.name.toLowerCase().includes(name.toLowerCase())
        );
        searchGame.length ?
            res.status(200).send(searchGame) :
            res.status(404).json({ msg: 'Game not Found 😕' });
    } else {
        res.status(200).json(totalGames);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        if (id.includes('-')) {
            const gameDb = await Videogame.findOne({
                where: { id },
                include: [Genre, Platform],
            });
            return res.json(gameDb);
        }
        const gameApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        res.json(gameApi.data);
    } catch (error) {
        res.status(404).json({ error: 'Id not found 😕' });
    }
});

router.post('/', async (req, res) => {
    let { name, image, description, released, rating, genres, platforms, createdInDb } = req.body
    let newGame = await Videogame.create({
        name,
        image,
        description,
        released,
        rating: rating || 1,
        createdInDb
    })

    let genreDb = await Genre.findAll({
        where: { name: genres }
    })

    let platformDb = await Platform.findAll({
        where: { name: platforms }
    });
    newGame.addGenres(genreDb);
    newGame.addPlatforms(platformDb);
    res.status(200).send('Video juego creado con exito 👌');
});

router.put('/', (req, res, next) => {
    res.send('soy put/videogame')
})

router.delete('/', (req, res, next) => {
    res.send('soy delete/videogame')
});

module.exports = router;
