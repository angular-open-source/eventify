import {Component, Input} from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {EventSummaryComponent} from '../event-summary/event-summary.component';
import {Event} from '../../model/event.entity'

@Component({
  selector: 'app-event-registered',
  standalone : true,
  imports: [
    MatGridList,
    EventSummaryComponent,
    MatGridTile
  ],
  templateUrl: './event-registered.component.html',
  styleUrl: './event-registered.component.css'
})
export class EventRegisteredComponent {
  @Input() events: Event[]=[];
}
