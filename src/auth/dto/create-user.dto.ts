import { IsEmail, IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthDto {
    @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
    email: string;

    @IsString({ message: 'La contraseña debe ser un texto válido' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    @MaxLength(20, { message: 'La contraseña no debe exceder los 20 caracteres' })
    @Matches(/(?=.*[a-z])/, { message: 'La contraseña debe contener al menos una letra minúscula' })
    @Matches(/(?=.*[A-Z])/, { message: 'La contraseña debe contener al menos una letra mayúscula' })
    @Matches(/(?=.*\d)/, { message: 'La contraseña debe contener al menos un número' })
    @Matches(/(?=.*[@$!%*?&])/, { message: 'La contraseña debe contener al menos un carácter especial (@$!%*?&)' })
    password: string;

    id?: string
}
