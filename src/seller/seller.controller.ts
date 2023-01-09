import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import {SellerService} from './seller.service'
import { CreateSellerDTO, UpdateSellerDTO } from './SellerDTO';


 
@Controller('api/seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService) {}

    @Get('/')
    getSellers(): object {
      return this.sellerService.getSellers();
    }

    @Get('/:sellerID')
    getSeller(@Param('sellerID', ParseIntPipe) sellerID: number): object {
      return this.sellerService.getSeller(sellerID);
    }

    @Post()
    createSeller(@Body() sellerDTO: CreateSellerDTO ): object{
      return this.sellerService.createSeller(sellerDTO)
    }

    @Patch('/:sellerID')
    updateSeller(
      @Body() updateDTO: UpdateSellerDTO,
      @Param('sellerID', ParseIntPipe) sellerID: number){
      return this.sellerService.updateSeller(sellerID, updateDTO )
    }

    @Delete('/:sellerID')
    deleteSeller(@Param('sellerID', ParseIntPipe) SellerID: number): object {
      return this.sellerService.deleteSeller(SellerID)
    }

}
