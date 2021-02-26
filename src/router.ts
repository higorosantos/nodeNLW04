import { Router } from 'express';
import { UserController } from './controllers/userController';

const router  = Router();


const userController:UserController = new UserController();

router.get("/users/:uuid",(req,res)=>{
    userController.getUser(req,res);  
})

router.get("/users",(req,res)=>{
    userController.getAllUsers(req,res);
})

router.post("/register",(req,res)=>{
    userController.create(req,res);  
})

export { router } ;