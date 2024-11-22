
# Movies Fullstack App - Backend API

## Descripción

Este proyecto es una **API backend** desarrollada en **NestJS** que permite gestionar un catálogo de películas y simula la funcionalidad de autenticación básica mediante **JWT (JSON Web Tokens)**. La API está diseñada para simular una base de datos utilizando arrays de objetos en memoria.

---

## Características principales

1. **Gestión de películas**:
   - Obtén un listado de todas las películas.
   - Consulta los detalles de una película específica.
   - Obtén recomendaciones de películas relacionadas.

2. **Autenticación con JWT**:
   - **Registro**: Valida y crea un nuevo usuario con un email único y contraseña segura.
   - **Inicio de sesión**: Devuelve un token JWT válido por 1 hora tras la autenticación exitosa.

3. **Validación estricta de usuarios**:
   - Uso de reglas específicas para asegurar contraseñas seguras y correos electrónicos válidos.
   - Validación implementada con `class-validator`.

4. **Simulación de base de datos**:
   - Los datos se almacenan en arrays en memoria para las películas y usuarios registrados.

5. **Seguridad**:
   - Se implementa **JWT** para proteger las rutas que requieren autenticación.
   - Tokens generados con una clave secreta definida en el proyecto.

---

## Instalación

### 1. Clonar el repositorio
```bash
git clone <URL-del-repositorio>
cd movies-fullstack-app
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en el directorio raíz con las siguientes configuraciones:
```env
PORT=4000
JWT_SECRET=secretKeyFullstack
JWT_EXPIRATION=3600
```

### 4. Ejecutar el servidor
- **Modo desarrollo**:
  ```bash
  npm run start:dev
  ```
- **Modo producción**:
  ```bash
  npm run start:prod
  ```

---

## Endpoints disponibles

### Películas

#### 1. **Obtener todas las películas**
- **Método**: `GET`
- **Ruta**: `/movies`
- **Descripción**: Devuelve un listado de todas las películas almacenadas.

#### 2. **Obtener los detalles de una película**
- **Método**: `POST`
- **Ruta**: `/movies/movie`
- **Body**:
  ```json
  {
    "movieId": 1
  }
  ```
- **Descripción**: Devuelve los detalles de una película específica.

#### 3. **Obtener recomendaciones**
- **Método**: `POST`
- **Ruta**: `/movies/recommend`
- **Body**:
  ```json
  {
    "recommend": [1, 2, 3]
  }
  ```
- **Descripción**: Devuelve un listado de películas recomendadas basadas en las IDs proporcionadas.

---

### Usuarios

#### 1. **Registro**
- **Método**: `POST`
- **Ruta**: `/auth/register`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "Password1234567!"
  }
  ```
- **Validaciones**:
  - El campo `email` debe ser un correo válido.
  - La contraseña debe cumplir:
    - Al menos 8 caracteres.
    - Al menos 1 número.
    - Al menos 1 letra mayúscula.
    - Al menos 1 carácter especial (`!@#$%^&*`).

#### 2. **Inicio de sesión**
- **Método**: `POST`
- **Ruta**: `/auth/login`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "Password123!"
  }
  ```
- **Descripción**: Devuelve un token JWT válido por 1 hora tras la autenticación exitosa.
- **Respuesta**:
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

---

## Validaciones de contraseña en el registro
Se utilizan las siguientes validaciones para el registro de usuarios:

```ts
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
```

---

## Seguridad: Implementación de JWT
La API utiliza una estrategia JWT para autenticar usuarios. A continuación, se detalla la configuración:

```ts
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKeyFullstack',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
```

---

## Estructura del proyecto
```
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── jwt.strategy.ts
├── data/
│   ├── movies.data.ts
│   ├── users.data.ts
├── movies/
│   ├── interface/
│   │   └── movie.ts
│   ├── movies.controller.ts
│   ├── movies.module.ts
│   ├── movies.service.ts
├── app.module.ts
├── main.ts
test/
```

---

## Dependencias principales
- **NestJS**: Framework principal.
- **JWT**: Implementación de autenticación.
- **class-validator**: Validación de datos de entrada.
- **class-transformer**: Transformación de datos de entrada y salida.

---

## Instalación de herramientas adicionales

Si necesitas instalar dependencias específicas para extensiones futuras, asegúrate de usar:
```bash
npm install <dependencia>
```

---

¡Gracias por usar esta API! Si tienes preguntas, no dudes en abrir un issue en el repositorio. 🚀
