export class Event {
  id: number;
  name: string;
  description: string;
  scheduledAt: string;
  constructor(id = 0, name = '', description = '', scheduleAt = '') {
    this.id = id;
    this.name = name;
    this.description = description;
    this.scheduledAt = scheduleAt;
  }
}
