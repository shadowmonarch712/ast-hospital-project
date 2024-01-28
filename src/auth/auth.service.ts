import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PatientUser } from 'src/patient/Schemas/patientUser.schema';
import { comparePasswords } from 'src/utils/bcrypt';

// const fakeUsers = [
//     {
//         username : "test1",
//         password : "test1"
//     },
//     {
//         username : "test3",
//         password : "3test"
//     },

// ]
@Injectable()
export class AuthService {
    constructor(private jwtService : JwtService,
        @InjectModel('PatientUser') private userModel: Model<PatientUser>){

    }
    // validateUser({username, password} : AuthPayloadDto){
    //     const findUser = fakeUsers.find(
    //         (user) => user.username === username);
    //         console.log(findUser);
    //         if(!username) return null;
    //         if(password === findUser.password){
    //             const {password , ...user} = findUser;
    //             return this.jwtService.sign(user)
    //         }
    // }
    async validateUser({username, password} : AuthPayloadDto){
        const findUser = await this.userModel.findOne({ username });
        // console.log(findUser)
        if(!findUser) return null;
        if(comparePasswords(password , findUser.password)){
            // const {password , ...user} = findUser.toObject();
            const {password ,...user} = findUser;
            // console.log(findUser)
            return this.jwtService.sign(user)
        }
    }
}
