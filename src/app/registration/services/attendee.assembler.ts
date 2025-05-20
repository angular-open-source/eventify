import {AttendeeResource} from './attendee.response';
import {Attendee} from '../model/attendee.entity';
import {BaseAssembler} from '../../shared/services/base-assembler.assembler';

export class AttendeeAssembler implements BaseAssembler<AttendeeResource, Attendee>{
  toEntityFromResource(resource: AttendeeResource): Attendee {
    return new Attendee(
      resource.id,
      resource.firstName,
      resource.lastName,
      resource.eventId,
      resource.ticketIdentifier,
      resource.checkedInAt
    )
  }
  toEntitiesFromResponse (response: AttendeeResource[]): Attendee[] {
    return response.map(resource => this.toEntityFromResource(resource))
  }
}
