import * as passport from 'passport';
import { PassportModule } from '@nestjs/passport';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jswt.strategy';
import { AuthController } from './auth.controller';
import { UserModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDTO } from '../users/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule,
    TypeOrmModule.forFeature([UserDTO]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secret',
      signOptions: { expiresIn: '30m' },
    }),],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(passport.authenticate('jwt', { session: false }))
      .forRoutes(
        { path: '/products', method: RequestMethod.ALL },
        { path: '/products/*', method: RequestMethod.ALL });
  }
}