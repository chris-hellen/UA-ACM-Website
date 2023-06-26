const express = require('express');
const router = express.Router();
const { getHomePage, getCOC, createMember } = require('../controllers/controller');

router.route('/')
    .get(getHomePage);

router.route('/code-of-conduct')
    .get(getCOC);

router.route('/add-member')
    .post(createMember);

module.exports = router