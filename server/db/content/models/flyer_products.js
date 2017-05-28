module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FlyerProduct', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    flyerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'flyer_id'
    },
    partNum: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'partnum'
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'logo'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'description'
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'price'
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'featured'
    },
    specialNote: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'special_note'
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'position'
    }
  }, {
    tableName: 'flyer_products',
    freezeTableName: true,
    timestamps: true,
    understored: true
  });
};