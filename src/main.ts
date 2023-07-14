import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //* ignora los atributos que no forman parte del esquema
      forbidNonWhitelisted: true, //! avisa de los atributos que no forman parte del esquema
    }),
  );
  await app.listen(3000);
}
bootstrap();
