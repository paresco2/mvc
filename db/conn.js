const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('nodemvc2','root','Relogio00@',{
    host: 'localhost',
    dialect:'mysql',
})


try{
    
    sequelize.authenticate()
    console.log('Conectado ao banco com sucesso')
}
catch(err){
    console.log(err)
}
module.exports = sequelize