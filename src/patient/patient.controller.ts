import { Body, Controller, Get, Post, Req} from '@nestjs/common';
import { CreatePatientUser } from './dto/createPatientUser.dto';
import { PatientService } from './patient.service';
import { Request } from 'express';

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

    // @Post('createProfile')
    // createPatientProfile()
}
