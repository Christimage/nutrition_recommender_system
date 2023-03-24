import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { User } from '../models/user.entity';
// import { HealthDetails } from './health-details.entity';
import { Region } from '../models/region.entity';
import { Allergy } from '../models/allergy.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Region, Allergy]) //HealthDetails,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
