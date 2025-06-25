import { Sequelize } from "sequelize";
const sequelize = new Sequelize('chiku','root','',{
    host : 'localhost',
    dialect : 'mysql'
});

(async function(){
await sequelize.authenticate();
console.log('Authenticate Successfully...!');
await sequelize.sync();
console.log('Tables are Synch...!')
})();

export default sequelize;