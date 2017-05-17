module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
    partNum: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'partnum'
    },
    msrp: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'msrp'
    }
  }, {
    tableName: 'msrp',
    timestamps: false,
    freezeTableName: true
  });
};
