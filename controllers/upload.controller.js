const { upload } = require('./utility/utility');
exports.uploadToOld = (req, res, next) => {
  upload(req, res, next, process.envOLD_LOGS_PATH);
};

exports.uploadToLive = (req, res, next) => {
  upload(req, res, next, process.LIVE_LOGS_PATH);
};

exports.uploadToTest = (req, res, next) => {
  upload(req, res, next, './upload');
};
