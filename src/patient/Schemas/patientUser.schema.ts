import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PatientUser extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  firstname: string;

  @Prop()
  secondname: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ required: true })
  addressline1: string;
  @Prop()
  addressline2: string;
  @Prop({ required: true })
  addresscity: string;
  @Prop({ required: true })
  addressstate: string;

  @Prop({ required: true })
  pincode: number;

  @Prop({ required: true })
  contact: number;
}

export const PatientUserSchema = SchemaFactory.createForClass(PatientUser);
