import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Users} from './entities/users.entity';
import {UserRoles} from './entities/user-roles.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Users, UserRoles])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
