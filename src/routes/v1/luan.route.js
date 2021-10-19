const express = require('express');
const luanController = require('../../controllers/luan.controller');

const router = express.Router();

router
  .route('/')
  .post(luanController.createLuan)
  .get(luanController.getLuans);

router
  .route('/:luanId')
  .get(luanController.getLuan)
  .patch(luanController.updateLuan)
  .delete(luanController.deleteLuan);

module.exports = router;