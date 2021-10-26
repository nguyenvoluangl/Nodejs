const httpStatus = require('http-status');
const { Blog } = require('../models');


/**
 * Create a blog
 * @param {Object} BlogBody
 * @returns {Promise<Blog>}
 */
const createBlog = async (blogBody) => {
  return Blog.create(blogBody);
};
/**
 * Create all blog
 * @returns {Promise<Blog>}
 */
const getAllBlog = async () => {
  return Blog.find();
};


module.exports = {
  createBlog,
  getAllBlog,
};