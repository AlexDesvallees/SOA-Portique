import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDTO } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserDTO])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}