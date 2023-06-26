const Member = require('../model/memberSchema');

const getHomePage = async (req,res) => {
    res
        .status(200)
        .json({ msg: 'Home page' });
}

const getCOC = async (req,res) => {
    res
        .status(200)
        .json({ msg: 'COC Page' });
}

const createMember = async (req,res) => {
    const member = await Member.create(req.body);
    res
        .status(200)
        .json({ member });
}

module.exports = {
    getHomePage,
    getCOC,
    createMember
}