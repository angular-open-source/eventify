import {Component, OnInit} from '@angular/core';
import {EventApiService} from '../../../registration/services/event-api.service';
import {Event} from '../../../registration/model/event.entity';
import {EventRegisteredComponent} from '../../../registration/components/event-registered/event-registered.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EventRegisteredComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  errorMessage: string | null = null;

  constructor(private eventService: EventApiService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAll().subscribe({
      next: (response) => {
        this.events = response;
      },
      error: (error) => {
        console.error('Error loading events:', error);
        this.errorMessage = 'Error loading events, please try again later.';
      }
    });
  }

}
