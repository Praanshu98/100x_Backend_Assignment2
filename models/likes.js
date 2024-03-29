'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Likes.init({
    user_id: DataTypes.BIGINT,
    post_id: DataTypes.BIGINT,
    like_date_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Likes',
  });
  return Likes;
};