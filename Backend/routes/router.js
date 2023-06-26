const express = require('express');
const router = express.Router();
const { getHomePage, getCOC } = require('../controllers/controller');

router.route('/')
    .get(getHomePage);

router.route('/code-of-conduct')
    .get(getCOC);

module.exports = router