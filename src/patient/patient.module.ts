import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientUser, PatientUserSchema } from './Schemas/patientUser.schema';

@Module({
  imports: [MongooseModule.forFeature([{name : PatientUser.name, schema: PatientUserSchema }])],
  providers: [PatientService],
  controllers: [PatientController]
})
export class PatientModule {}
