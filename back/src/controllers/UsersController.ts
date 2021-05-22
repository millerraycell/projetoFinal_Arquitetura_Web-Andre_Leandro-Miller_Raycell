import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import firebase from 'firebase'
import User from '../models/UserModel'

export default {
    async create(request: Request, response: Response) {
        const {
            email,
            password,
            admin,
            nome
        } = request.body

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                var user_fire = userCredential.user;
                console.log(user_fire?.email)

                const usersRepository = getRepository(User)
                const user = usersRepository.create({ email, password, admin, nome })
                usersRepository.save(user)

                return response.status(201).json(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    },

    async login(request: Request, response:Response){
        const {email, password} = request.body;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async(userCredential) => {
                var user_firebase = userCredential.user;

                const usersRepository = getRepository(User)
                const user = await usersRepository.findOne({"email": email}) 
                console.log(user)
                return response.json(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                
            });

            
    }
}