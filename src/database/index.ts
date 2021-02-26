import { createConnection } from 'typeorm';

createConnection().then(()=>{
    console.log('Banco de dados conectado com sucesso!')

}).catch((e)=>{
    console.log('Houve um erro: ',e)
})