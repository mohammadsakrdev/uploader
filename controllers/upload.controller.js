const { upload } = require('./utility/utility');
exports.uploadToOld = (req, res, next) => {
  upload(req, res, next, process.env.OLD_LOGS_PATH);
};

exports.uploadToLive = (req, res, next) => {
  upload(req, res, next, process.LIVE_LOGS_PATH);
};

exports.uploadToTest = (req, res, next) => {
  upload(req, res, next, process.env.TEST_LOGS_PATH);
};
