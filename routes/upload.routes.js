const express = require('express');

const uploadController = require('../controllers/upload.controller');
const router = express.Router();

router.post('/upload/old', uploadController.uploadToOld);
router.post('/upload/live', uploadController.uploadToLive);
router.post('/upload/test', uploadController.uploadToTest);
router.post('/upload/all', uploadController.all);

module.exports = {
  router: router
};
