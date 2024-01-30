import { Body, Controller, Get, Patch, Post, Put, Req } from '@nestjs/common';
import { CreatePatientUser } from './dto/createPatientUser.dto';
import { PatientService } from './patient.service';
import { Request } from 'express';
import { createPatientProfile } from './dto/createPatientProfile.dto';
import { addPatientAppointments } from './dto/addPatientAppointments.dto';

@Controller('patient')
export class PatientController {
    constructor(private patientService: PatientService) { }

    @Post()
    createPatient(@Body() createPatientDto: CreatePatientUser) {
        return this.patientService.createPatientUser(createPatientDto);
    }

    @Put('profile')
    updatePatientProfile(@Body() createPatientProfile: createPatientProfile, @Req() req: Request) {
        // return this.patientService.updatePatientUser(req.user, updateProfileDto);
        return this.patientService.createPatientProfile(req.user, createPatientProfile);
    }

    @Put('addAppointment')
    addPatientAppointment(@Body() AddPatientAppointments: addPatientAppointments, @Req() req: Request) {
        return this.patientService.addAppointment(req.user, AddPatientAppointments);
    }

    @Patch('changeStatus/:appointmentId')
    async changeStatusAppointment(@Body('status') newStatus: string, @Req() req: Request) {
        const username = req.user;
        const { appointmentId } = req.params;
        return this.patientService.changeStatusAppointment(username, appointmentId, newStatus);
    }

}
