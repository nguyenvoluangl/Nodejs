const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { luanService } = require('../services');

const createLuan = catchAsync(async (req, res) => {
  const luan = await luanService.createLuan(req.body);
  res.status(httpStatus.CREATED).send(luan);
});

const getLuans = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await luanService.queryLuans(filter, options);
  res.send(result);
});

const getLuan = catchAsync(async (req, res) => {
  const luan = await luanService.getLuanById(req.params.luanId);
  if (!luan) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Luan not found');
  }
  res.send(luan);
});

const updateLuan = catchAsync(async (req, res) => {
  const luan = await luanService.updateLuanById(req.params.luanId, req.body);
  res.send(luan);
});

const deleteLuan = catchAsync(async (req, res) => {
  await luanService.deleteLuanById(req.params.luanId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLuan,
  getLuans,
  getLuan,
  updateLuan,
  deleteLuan,
};
