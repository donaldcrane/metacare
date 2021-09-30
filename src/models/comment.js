const { UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comments", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      unique: true,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commenterIp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Comment;
};
