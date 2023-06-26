const getHomePage = (req,res) => {
    res
        .status(200)
        .json({ msg: 'Home page' });
}

const getCOC = (req,res) => {
    res
        .status(200)
        .json({ msg: 'COC Page' });
}

module.exports = {
    getHomePage,
    getCOC
}