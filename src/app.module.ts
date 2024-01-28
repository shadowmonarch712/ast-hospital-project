import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './patient/patient.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://shadowmonarch712:testuser@cluster0.mzexokf.mongodb.net/') , AuthModule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
