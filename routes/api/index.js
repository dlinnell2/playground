const router = require("express").Router();
const dbController = require("../../controllers/dbController")

router.route("/find")
    .get(dbController.find);

router.route('/hello')
    .get((req, res) => {
        res.send({ express: 'Hello From Express' });
    })

module.exports = router;