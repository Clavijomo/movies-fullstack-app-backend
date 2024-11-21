import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';
export class RegisterUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
    @Matches(/(?=.*\d)/, { message: 'La contraseña debe contener al menos un número.' })
    @Matches(/(?=.*[A-Z])/, { message: 'La contraseña debe contener al menos una letra mayúscula.' })
    @Matches(/(?=.*[!@#$%^&*])/, { message: 'La contraseña debe contener al menos un carácter especial (!@#$%^&*).' })
    password: string
}