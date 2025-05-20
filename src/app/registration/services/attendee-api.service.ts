import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {AttendeeResource} from './attendee.response';
import {Attendee} from '../model/attendee.entity';
import {environment} from '../../../environments/environment.development';
import {AttendeeAssembler} from './attendee.assembler';
import {HttpClient} from '@angular/common/http';

const attendeesResourceEndpointPath = environment.attendeesEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class AttendeeApiService extends BaseService<AttendeeResource, Attendee>{

  constructor(http: HttpClient) {
    super(http, new AttendeeAssembler());
    this.resourceEndpoint = attendeesResourceEndpointPath;
  }
}
