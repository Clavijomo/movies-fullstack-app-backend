import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { users } from 'src/data/users';
import { AuthDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    private users = users;

    constructor(private readonly jwtService: JwtService) { };

    async validateUser(user: AuthDto): Promise<any> {
        const existUser = this.users.find(user => user.email === user.email);
        if (existUser && (await bcrypt.compare(user.password, user.password))) {
            const { password, ...result } = user;
            return result;
        }

        throw new UnauthorizedException('Credenciales incorrectas');
    }

    async login(user: AuthDto) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}

