const router = require("express").Router();
const phonesData = require("../phones.json");


router.get('/', (req, res) => {
	res.status(200).json(phonesData);
});

module.exports = router;