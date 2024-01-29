// doctor.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Doctor extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  // Add other fields as needed

  @Prop()
  password: string;

  @Prop()
  contactNumber: string;

  @Prop()
  specialization: string;

  @Prop()
  location: {
    address: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };

  @Prop()
  education: Array<{
    degree: string;
    university: string;
    year: number;
  }>;

  @Prop()
  affiliations: string[];

  @Prop()
  experience: Array<{
    position: string;
    organization: string;
    duration: string;
  }>;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
