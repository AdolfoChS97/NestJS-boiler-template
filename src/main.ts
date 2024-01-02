import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const APP_ORIGIN = configService.get('APP_ORIGIN');
  app.enableCors({ origin: APP_ORIGIN });
  const PORT = configService.get('APP_PORT');
  await app.listen(PORT);
}
bootstrap();
