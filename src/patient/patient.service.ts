import { Injectable } from '@nestjs/common';
import { PatientUser } from './Schemas/patientUser.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { encodePassword } from 'src/utils/bcrypt';
import { CreatePatientUser } from './dto/createPatientUser.dto';
import { createPatientProfile } from './dto/createPatientProfile.dto';

@Injectable()
export class PatientService {
    constructor(
        @InjectModel(PatientUser.name) private patientUserModel: Model<PatientUser>,
      ) {}

    
    async createPatientUser(patientDto: CreatePatientUser){
        const password = encodePassword(patientDto.password);
        // const createdPatient = new this.patientUserModel(patientDto);
        const createdPatient = new this.patientUserModel({
          ...patientDto,
          password: password,
      });
        console.log("inside patient service");
        return createdPatient.save();
    }

    async createPatientProfile(username: any, createPatientProfile: createPatientProfile) {
      console.log(createPatientProfile)
      return this.patientUserModel.updateOne({ username }, { $set: createPatientProfile });
  }
    // async createPatientProfile()
}
