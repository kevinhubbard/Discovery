module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
      city: {
      type: DataTypes.STRING,
      allowNull: false
    },
      state: {
      type: DataTypes.STRING,
      allowNull: false
    },
      zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
      catagory: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Activity;
};
