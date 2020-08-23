const logger = require('tracer').console();

const SERVICE = 'UTILS';

module.exports = {
    // fallback error
    resError: (serviceName, res, error) => {
        logger.error(SERVICE, serviceName, error);
        return res.send({error});
    },

    // default response object
    resObj: () => {
        return {
            success: true,
            resdata: {}
        }
    },
};
