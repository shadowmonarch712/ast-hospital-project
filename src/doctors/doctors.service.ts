// doctor.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from './doctors.entity';
import { DoctorDto } from './doctors.dto';

@Injectable()
export class DoctorService {
  constructor(@InjectModel(Doctor.name) private readonly doctorModel: Model<Doctor>) {}

  async create(doctorDto: DoctorDto): Promise<Doctor> {
    const createdDoctor = new this.doctorModel(doctorDto);
    return createdDoctor.save();
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctorModel.find().exec();
  }

  async findOne(id: string): Promise<Doctor> {
    return this.doctorModel.findById(id).exec();
  }

  async update(id: string, doctorDto: DoctorDto): Promise<Doctor> {
    return this.doctorModel.findByIdAndUpdate(id, doctorDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Doctor> {
    return this.doctorModel.findByIdAndDelete(id).exec();
  }
}
