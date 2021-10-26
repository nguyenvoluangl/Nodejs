const express = require('express');
const blogController = require('../../controllers/blog.controller');

const router = express.Router();

router
  .route('/voluan').post(blogController.createBlog)
  .get(blogController.getAllBlog);
module.exports = router;