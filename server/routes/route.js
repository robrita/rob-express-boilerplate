const express = require('express');
const logger = require('tracer').console();
const utils = require('../common/utils');

const router = express.Router();
const SERVICE = 'ROUTE';

router.get('/', (req, res) => {
    const resObj = utils.resObj();
    try {
        logger.info(SERVICE, 'just a sample route...', resObj);
        return res.send(resObj);

    } catch (error) {
        return utils.resError(SERVICE, res, error);
    }
});

module.exports = router;