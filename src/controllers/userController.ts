import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/user';



class UserController{
    async create(req:Request, res:Response){

        const { name, email } = req.body;
        const userRepository = getRepository(User);
      
        const vUser = await userRepository.findOne({
            where:{
                email
            }
        })

        if(vUser){
            return res.status(400).json({message:"Usuario ja cadastrado!"});
        }

        const user =  userRepository.create({
            name,
            email
        })

        try{
            await userRepository.save(user);
            return res.json(user)
        }
        catch(e){
            return res.json(e);
        }
    }
    
    async update(req:Request, res:Response){

    }

    async delete(req:Request, res:Response){
        
    }

    async getUser(req:Request, res:Response){
        const { uuid } = req.params;

        const userRepository = getRepository(User);

        try{
            const user = await userRepository.findOne({
                where:{
                    id:uuid
                }
            })
            if(user == undefined){
                return res.status(400).json({message:"Usuario não existe!"})
            }

            return res.json(user);

        }catch(e){
            return res.json(e)
        }

    }

    async getAllUsers(req:Request, res:Response){
        const userRepository = getRepository(User);
        const users = await userRepository.find()
        res.json(users);
    }
}


export { UserController };