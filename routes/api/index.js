const router = require("express").Router();
const dbController = require("../../controllers/dbController")

router.route("/findbounds")
    .post(dbController.findInBounds);

module.exports = router;