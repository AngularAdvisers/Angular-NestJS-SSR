import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as express from 'express';
export const app = express();
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('api');
  // Using Firebase Cloud Function Instead
  // await app.listen(4200);
}
bootstrap();
