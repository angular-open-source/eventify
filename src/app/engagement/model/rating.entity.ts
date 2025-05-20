export class Rating {
  id: number;
  attendeeId: number;
  eventId: number;
  rating: number;
  ratedAt: string;
  constructor(id = 0, attendeeId = 0, eventId = 0, rating = 0, ratedAt = '') {
    this.id = id;
    this.attendeeId = attendeeId;
    this.eventId = eventId;
    this.rating = rating;
    this.ratedAt = ratedAt
  }
}
