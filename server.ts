import express from 'express';

const app = express();



app.use(express.json());



app.get("/:id",(req,res)=>{
    res.json({message: "Bem vindo!"});    
    console.log(req.params.id);
})

app.post("/register",(req,res)=>{
    res.json({message:"Cadastrado com sucesso!"});
    console.log(req.body);
})




app.listen(3333,()=>{
    console.log("Servidor Iniciado com sucesso!")
});


