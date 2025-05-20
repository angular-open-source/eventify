import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {RatingResource} from './rating.response';
import {Rating} from '../model/rating.entity';
import {RatingAssembler} from './rating.assembler';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';

const ratingResourceEndpointPath = environment.ratingsEndpointPath

@Injectable({
  providedIn: 'root'
})
export class RatingApiService extends BaseService<RatingResource, Rating>{

  constructor(http: HttpClient) {
    super(http, new RatingAssembler());
    this.resourceEndpoint = ratingResourceEndpointPath;
  }
}
