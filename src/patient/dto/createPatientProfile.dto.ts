import { IsString, IsInt, IsDate, IsOptional } from 'class-validator';

export class Address {
  @IsString()
  readonly line1: string;

  @IsString()
  @IsOptional()
  readonly line2?: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly state: string;

  @IsInt()
  readonly pincode: number;
}

export class createPatientProfile {
  @IsString()
  readonly firstname: string; 

  @IsString()
  @IsOptional()
  readonly secondname?: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly gender: string;

  @IsDate()
  readonly dob: Date;

  readonly address: Address;

  @IsInt()
  readonly contact: number;
}
