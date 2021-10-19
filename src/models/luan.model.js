const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');


const luanSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
luanSchema.plugin(toJSON);
luanSchema.plugin(paginate);

/**
 * @typedef Luan
 */
const Luan = mongoose.model('Luan', luanSchema);

module.exports = Luan;