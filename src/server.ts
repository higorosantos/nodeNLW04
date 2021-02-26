import 'reflect-metadata';
import './database';
import express from 'express';
import { router }  from './router';

const app = express();

app.use(express.json());
app.use(router)



app.listen(3333,()=>{
    console.log("Servidor Iniciado com sucesso!")
});

