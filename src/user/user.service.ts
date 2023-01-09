import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";


@Injectable()
export class UserService{
    constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>
    ){}
    
    getUsers(): Promise<User[]> {
      return this.usersRepository.find();
    }

    getUser(id: number): Promise<User> {
      return this.usersRepository.findOne({ where: { id } });
    }

    getByEmail(email: string){
      return this.usersRepository.findOne( { where: { email } })
    }

    createUser(obj: object): object{
      return this.usersRepository.save(obj)
    }

    updateUser(obj: object, userID: number): object {
      return this.usersRepository.update(userID, obj)
    }

    deleteUser(id:number): object {
      return this.usersRepository.delete(id)
    }
}