import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Event } from '@app/core/models/event';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent {
  event = input.required<Event>();
}
