module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
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
      type: DataTypes.STRING,
      allowNull: false
    },
      catagory: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true, 
    timestamps: false
  }
 );
  return Activity;
};
