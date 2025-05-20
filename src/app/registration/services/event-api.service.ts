import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {EventResource} from './event.response';
import {Event} from '../model/event.entity';
import {environment} from '../../../environments/environment.development';
import {EventAssembler} from './event.assembler';
import {HttpClient} from '@angular/common/http';

const eventsResourceEndpointPath = environment.eventsEndpointPath

@Injectable({
  providedIn: 'root'
})
export class EventApiService extends BaseService<EventResource, Event>{
  constructor(http: HttpClient) {
    super(http, new EventAssembler());
    this.resourceEndpoint = eventsResourceEndpointPath
  }

}
