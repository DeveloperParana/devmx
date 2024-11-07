import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const urlPrefix = 'api';
  app.setGlobalPrefix(urlPrefix);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  const config = new DocumentBuilder()
    .setTitle('devpr mx')
    .setDescription('devpr member experience')
    .addBearerAuth()
    .setContact(
      'Guilherme Siquinelli',
      'github.com/guiseek',
      'guilherme@devpr.org'
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = +process.env.PORT || 3000;
  await app.listen(port);
  const url = `http://localhost:${port}/docs`;
  Logger.log(`🚀 Application is running on: ${url}`);

  // console.log(JSON.stringify(document));
}

bootstrap();
