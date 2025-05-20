import {RatingResource} from './rating.response';
import {Rating} from '../model/rating.entity';
import {BaseAssembler} from '../../shared/services/base-assembler.assembler';

export class RatingAssembler implements BaseAssembler<RatingResource, Rating> {
  toEntityFromResource(resource: RatingResource): Rating {
    return new Rating(
      resource.id,
      resource.attendeeId,
      resource.eventId,
      resource.rating,
      resource.ratedAt
    )
  }
  toEntitiesFromResponse (response: RatingResource[]): Rating[] {
    return response.map(resource => this.toEntityFromResource(resource))
  }
}
