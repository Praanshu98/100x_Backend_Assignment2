'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init({
    user_id: DataTypes.BIGINT,
    content: DataTypes.TEXT,
    creation_time: DataTypes.DATE,
    is_reply: DataTypes.BOOLEAN,
    original_post_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};