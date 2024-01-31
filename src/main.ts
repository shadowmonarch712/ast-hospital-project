import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

//swagger function implementation :)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
  .setTitle('Hospital project')
  .setDescription('Swagger integrated for the modules')
  .setVersion('1.0')
  .addTag('Hosproject')
  .build()

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('apii',app,document);


  await app.listen(3000);
}
bootstrap();
