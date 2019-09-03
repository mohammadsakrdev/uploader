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

exports.all = (req, res, next) => {
  const { old, live, test } = req.body;
  console.log('old', old);
  console.log('live', live);
  console.log('test', test);
};
