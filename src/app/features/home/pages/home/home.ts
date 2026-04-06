import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { EventCardComponent } from '@app/shared/components/event-card/event-card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Event } from '@app/core/models/event';

@Component({
  selector: 'app-home',
  imports: [EventCardComponent, InputTextModule, ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent {
   events = signal<Event[]>([
    {
      id: '1',
      title: 'React Meetup Colombia 2025',
      category: 'Tech',
      location: 'Bogotá • Online',
      date: 'Apr 12'
    },
    {
      id: '2',
      title: 'Open Mic Night Medellín',
      category: 'Music',
      location: 'Medellín',
      date: 'Apr 18'
    }
  ]);

}
