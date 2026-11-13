const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Movimento = db.define('movimento',{
    codMovimento:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    idObra:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            key: 'codObra',
            model: 'obras'
        }
    }
},{
    timestamps: false,
    tableName: 'movimentos'
})

module.exports = Movimento