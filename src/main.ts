import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'verbose', 'log', 'warn', 'error', 'fatal'],
  });
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('The OnTarget Labs Interview API')
    .setDescription('Online code challenge for OnTarget Labs')
    .setVersion('1.0.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, documentFactory);

  let configService = app.get(ConfigService);

  const appHost = configService.get<string>('APP_HOST') || 'localhost';
  const appPort = configService.get<number>('APP_PORT') || 3000;

  const logger = new Logger(appHost);
  
  logger.debug(`Application is running on: http://${appHost}:${appPort}/api`);
  logger.debug(`Swagger UI is available at: http://${appHost}:${appPort}/api-doc`);
  
  await app.listen(appPort, appHost);
}
bootstrap();
