import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // se agrega el prefijo para que pueda llamar de la siguiente manera
  // localhost:3000/api/v2/
  app.setGlobalPrefix('api/v2')
  // Se agrega las validaciones globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  
  await app.listen(3000);
}
bootstrap();