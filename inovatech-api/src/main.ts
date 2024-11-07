import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Inovatech API')
    .setVersion('1.0')
    .build();

  const swaggerCustomOptions: SwaggerCustomOptions = {
    customCss: `.swagger-ui .topbar { display: none }`,
    customSiteTitle: 'Inovatech API Documentation',
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      docExpansion: 'none',
    },
  };

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, swaggerDocument, swaggerCustomOptions);

  app.enableCors();

  await app.listen(process.env.API_PORT || 3000);
}
bootstrap();
