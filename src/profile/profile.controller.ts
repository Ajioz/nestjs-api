import { Controller } from '@nestjs/common';
import { Get, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController {

    @UseGuards(AuthGuard('jwt'))
    @Get()
    profile(){
        return {msg: "I am a protected route"}
    }
}
