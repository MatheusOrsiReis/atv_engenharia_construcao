const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Obra = db.define('obra',{
    codObra:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cnpj:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'obras'
})

module.exports = Obra