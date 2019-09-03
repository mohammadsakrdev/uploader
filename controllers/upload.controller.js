const { createWriteStream } = require('fs');
const download = require('download');
const path = require('path');

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

exports.all = async (req, res, next) => {
  if (req.header('Upload-Auth') !== process.env.SECRET_KEY.toString()) {
    console.log('Upload-Auth not correct');
    return res
      .status(400)
      .send({ success: false, message: 'Un Authorized Access' });
  }
  const { old, live, test } = req.body;
  console.log('old', old);
  console.log('live', live);
  console.log('test', test);
  test.forEach(async file => {
    try {
      console.log('@Download Starting');
      await download(path.join(process.env.TEST_DOWNLOAD_API, file)).pipe(
        createWriteStream(path.join(process.env.TEST_LOGS_PATH, file))
      );
      console.log('@Download Done', result);
    } catch (error) {
      console.log('@Download Error', error);
    }
  });
};
