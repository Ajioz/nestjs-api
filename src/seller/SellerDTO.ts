import { IsEmail, IsNotEmpty, IsString, IsNumber} from 'class-validator';


export class CreateSellerDTO{
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

export class UpdateSellerDTO{
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsNotEmpty()
    password: string;

    @IsString()
    occupation: string;
}