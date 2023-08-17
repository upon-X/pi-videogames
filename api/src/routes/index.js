const { Router } = require('express');
const genreController = require('../controllers/genre');
const videogameController = require('../controllers/videogame');
const platformController = require('../controllers/platform')

const router = Router();

router.use('/genre', genreController);
router.use('/videogame', videogameController);
router.use('/platforms', platformController);

module.exports = router;