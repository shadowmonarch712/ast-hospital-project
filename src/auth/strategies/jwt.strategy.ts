import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt, Strategy} from 'passport-jwt';
import { Injectable} from "@nestjs/common";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey: 'abc123',
        });
    }

    validate(payload : any){
        console.log('inside jwt strategy')
        console.log(payload)
        return payload;
    }
}