const express = require('express');
const authRoute = require('./auth.route');
const luanRoute = require('./luan.route');
const lopRoute = require('./lop.route');
const sinhvienRoute = require('./sinhvien.route');
const apparelSizeRoute = require('./apparelSize.route');
const productRoute = require('./product.route');
const productCategoriesRoute = require('./productCategories.route');
const blogRoute = require('./blog.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/luans',
    route: luanRoute,
  },
  {
    path: '/lops',
    route: lopRoute,
  },
  {
    path: '/sinhviens',
    route: sinhvienRoute,
  },
  {
    path: '/apparelsizes',
    route: apparelSizeRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/product_categories',
    route: productCategoriesRoute,
  },
  {
    path: '/blogs',
    route: blogRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
