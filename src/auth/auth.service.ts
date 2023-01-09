import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SellerService } from 'src/seller/seller.service';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './loginDTO';


@Injectable()
export class AuthService {

    constructor(
            private readonly userService: UserService,
            private readonly sellerService: SellerService,
            private jwtService: JwtService
        ){}

    async validateUser(email: string, password:string){
        const user =  await this.userService.getByEmail(email);
        if(user && user.password === password){
            return  user;
        }
        return null;
    }

    async validateSeller(email: string, password:string){
        const user =  await this.sellerService.getByEmail(email);
        if(user && user.password === password){
            return  user;
        }
        return null;
    }

    async login (user: any) {
        const payload = {email: user.email, sub: user.id };
        return{
            access_token: this.jwtService.sign(payload)
        }
    }
}
