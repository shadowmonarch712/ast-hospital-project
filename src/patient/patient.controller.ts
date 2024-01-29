import { Body, Controller, Get, Post, Put, Req} from '@nestjs/common';
import { CreatePatientUser } from './dto/createPatientUser.dto';
import { PatientService } from './patient.service';
import { Request } from 'express';
import { createPatientProfile } from './dto/createPatientProfile.dto';

@Controller('patient')
export class PatientController {
    constructor(private patientService : PatientService){}
    
    @Post()
    createPatient(@Body() createPatientDto : CreatePatientUser) {
        return this.patientService.createPatientUser(createPatientDto);
    }

    @Get('profile')
    getProfile(@Req() req: Request) {
        // req.user is typically populated in middleware
        const username = req.user;
        return username;
    }

    @Put('profile')
    updatePatientProfile(@Body() createPatientProfile: createPatientProfile, @Req() req: Request) {
    // return this.patientService.updatePatientUser(req.user, updateProfileDto);
    return this.patientService.createPatientProfile(req.user, createPatientProfile);
}
}
