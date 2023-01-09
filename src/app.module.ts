import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SellerModule } from './seller/seller.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { Seller } from './seller/entity/seller.entity';



@Module({
  imports: [UserModule, SellerModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Onoriode1!',
      database: 'nestjs',
      entities: [User, Seller],
      synchronize: true,
    }),
    AuthModule,
    ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}