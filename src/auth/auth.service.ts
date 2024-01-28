import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
    {
        username : "test1",
        password : "test1"
    },
    {
        username : "test2",
        password : "test2"
    },

]
@Injectable()
export class AuthService {
    constructor(private jwtService : JwtService){

    }
    validateUser({username, password} : AuthPayloadDto){
        const findUser = fakeUsers.find(
            (user) => user.username === username);
            if(!username) return null;
            if(password === findUser.password){
                const {password , ...user} = findUser;
                return this.jwtService.sign(user)
            }
    }
}
