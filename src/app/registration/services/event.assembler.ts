import {EventResource} from './event.response';
import {Event} from '../model/event.entity';
import {BaseAssembler} from '../../shared/services/base-assembler.assembler';

export class EventAssembler implements BaseAssembler<EventResource, Event> {
  toEntityFromResource(resource: EventResource): Event {
    return new Event(
      resource.id,
      resource.name,
      resource.description,
      resource.scheduledAt,
    )
  }
  toEntitiesFromResponse (response: EventResource[]): Event[] {
    return response.map(resource => this.toEntityFromResource(resource))
  }
}
