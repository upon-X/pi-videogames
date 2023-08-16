const { Router } = require('express');
const genreRoute = require('./genre');
const videogameRoute = require('./videogame');
const platformRoute = require('./platforms')

const router = Router();

router.use('/genre', genreRoute);
router.use('/videogame', videogameRoute);
router.use('/platforms', platformRoute);

module.exports = router;