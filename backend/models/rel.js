const Funcionario = require('./Funcionario')
const Obra = require('./Obra')
const Material = require('./Material')
const Movimento = require('./Movimento')

Obra.hasMany(Material,{
    foreignKey: 'idObra',
    as: 'obraMaterial',
    onDelete: 'CASCADE'
})

Material.belongsTo(Obra,{
    foreignKey: 'idObra',
    as: 'materialObra',
    allowNull: false
})

Obra.hasMany(Movimento,{
    foreignKey: 'idObra',
    as: 'obraMovimento',
    onDelete: 'CASCADE'
})

Movimento.belongsTo(Obra,{
    foreignKey: 'idObra',
    as: 'movimentoObra',
    allowNull: false
})

module.exports = {Funcionario, Obra, Material, Movimento}