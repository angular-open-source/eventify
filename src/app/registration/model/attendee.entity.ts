export class Attendee {
  id: number;
  firstName: string;
  lastName: string;
  eventId: number;
  ticketIdentifier: string
  checkedInAt: string;
  constructor(id = 0, firstName = '', lastName = '', eventId = 0, ticketIdentifier = '', checkedInAt = '') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.eventId = eventId;
    this.ticketIdentifier = ticketIdentifier;
    this.checkedInAt = checkedInAt;
  }
}
