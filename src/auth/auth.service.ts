import { HttpCode, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { users } from 'src/data/users';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    private users = users;
    constructor(private readonly JwtService: JwtService) { }

    async validateUser(userObject: RegisterUserDto) {
        const userExist = this.users.find(user => user.email === userObject.email);
        if (userExist && userExist.password === userObject.password) {
            const { password, ...result } = userExist;
            return result;
        }

        throw new UnauthorizedException('Credenciales incorrectas');
    }

    async login(user: RegisterUserDto) {
        const payload = { email: user.email };
        return {
            access_token: this.JwtService.sign(payload)
        }
    }

    async signUp(user: RegisterUserDto) {
        const existUser = this.users.find(us => us.email === user.email);
        if (existUser) {
            throw new UnauthorizedException('Este email ya existe');
        }

        this.users.push(user);
        const payload = { email: user.email }
        return {
            access_token: this.JwtService.sign(payload)
        }
    }
}
