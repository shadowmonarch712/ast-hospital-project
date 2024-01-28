import { Body, Controller, Post} from '@nestjs/common';
import { CreatePatientUser } from './dto/createPatientUser.dto';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
    constructor(private patientService : PatientService){}
    
    @Post()
    createPatient(@Body() createPatientDto : CreatePatientUser) {
        return this.patientService.createPatientUser(createPatientDto);
    }

}
