import { Sequelize } from "sequelize";


const sequelize = new Sequelize('heroku','root','',{
    host : 'localhost',
    dialect : 'mysql'
});

(async function(){
try{
    await sequelize.authenticate();
    console.log('Authenticated Successfully...')
    await sequelize.sync();
    console.log('Tables are Sync...')
}
catch(err){
    console.log(err)
}    
})();

export default sequelize;