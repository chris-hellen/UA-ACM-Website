const express = require('express');
const router = express.Router();
const { getHomePage, getCOC, createMember, getAllMembers } = require('../controllers/controller');

router.route('/')
    .get(getHomePage);

router.route('/code-of-conduct')
    .get(getCOC);

router.route('/add-member')
    .post(createMember);

router.route('/members')
    .get(getAllMembers);

module.exports = router