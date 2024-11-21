import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'jwt/jwt.strategy';

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET_KEY'),
                signOptions: { expiresIn: '1h' }
            }),
            inject: [ConfigService]
        })],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule { }
