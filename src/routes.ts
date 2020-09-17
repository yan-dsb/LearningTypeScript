import { Request, Response } from "express";
import createUser from './services/CreateUser'
export function helloWorld(req : Request, res: Response){

    const user = createUser({
        email: 'dummy@dummy.com',
        password: '123',
        techs: ['Node', 'JavaScript', 'TypeScript', {title: 'React', experience: 100}]
    });
    
    return res.json({user})
}