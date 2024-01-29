import { IsString, IsInt, IsDate, IsOptional } from 'class-validator';

export class createPatientProfile {

  @IsString()
  readonly firstname: string;

  @IsString()
  readonly secondname?: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly gender: string;

  @IsDate()
  readonly dob: Date;

  @IsString()
readonly addressline1: string;

  @IsString()
  readonly addressline2?: string;

  @IsString()
  readonly addresscity?: string;

  @IsString()
  readonly addressstate?: string;

  @IsInt()
  readonly pincode?: number;

  @IsInt()
  readonly contact?: number;
}
