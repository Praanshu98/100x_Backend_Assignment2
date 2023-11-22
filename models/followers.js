'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Followers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Followers.init({
    follower_id: DataTypes.BIGINT,
    following_id: DataTypes.BIGINT,
    follow_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Followers',
  });
  return Followers;
};