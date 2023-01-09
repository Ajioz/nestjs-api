import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Seller } from './entity/seller.entity';


@Injectable()
export class SellerService {

  constructor(
    @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>
  ){}


  getSellers(): Promise<Seller[]> {
    return this.sellerRepository.find()
  }

  getSeller(id: number): object {
    return this.sellerRepository.findOne({ where: { id } });
  }

  getByEmail(email: string){
    return this.sellerRepository.findOne( { where: { email } });
  }


  createSeller(obj: object): object{
    return this.sellerRepository.save(obj);
  }

  updateSeller(id: number, obj: object): object{
    return this.sellerRepository.update(id, obj)
  }

  deleteSeller(id: number): object{
    return this.sellerRepository.delete(id);
  }

}
