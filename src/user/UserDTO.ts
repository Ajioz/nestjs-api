import { IsEmail, IsNotEmpty, IsString, IsNumber} from 'class-validator';


export class CreateUserDTO{
    @IsEmail()
    email: string;

    @IsString()
    name: string;
 
    @IsNotEmpty()
    password: string;

    @IsString()
    occupation: string;

    @IsNumber()
    age: number
}

export class UpdateUserDTO{
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsNotEmpty()
    password: string;

    @IsString()
    occupation: string;
}