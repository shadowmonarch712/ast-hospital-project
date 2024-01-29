import { IsEmail, IsEmpty } from "class-validator";

export class CreatePatientUser {

    @IsEmail()
    username: string;

    @IsEmpty()
    password: string;
}