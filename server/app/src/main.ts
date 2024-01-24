import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: errors => new BadRequestException(errors)

  }))
  await app.listen(3000);
  console.log('listening on: http://localhost:3000/api')
}
bootstrap();
