let router = require('express').Router();
const getRecords = require("../controllers/get-records")

router.route('/records')
    .post(getRecords);

module.exports = router;