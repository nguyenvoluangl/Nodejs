const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { blogService } = require('../services');

const createBlog = catchAsync(async (req, res) => {
  const blog = await blogService.createBlog(req.body);
  res.status(httpStatus.CREATED).send(blog);
});

const getAllBlog = catchAsync(async (req, res) => {
  const blogs = await blogService.getAllBlog();
  res.send(blogs);
});

module.exports = {
  createBlog,
  getAllBlog,
};
