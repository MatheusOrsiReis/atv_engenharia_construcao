const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Material = db.define('material',{
    codMaterial:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria:{
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
    },
    qtde:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codLote:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'materiais'
})

module.exports = Material