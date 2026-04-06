import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/core/models/event';

@Component({
  selector: 'app-event-detail',
  imports: [],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetailComponent {
   route = inject(ActivatedRoute);
   eventId = computed(() => this.route.snapshot.params['id']);

   event = signal<Event>({
    id: '1',
    title: 'React Meetup Colombia 2025',
    category: 'Tech',
    location: 'Bogotá • Online',
    date: 'Apr 12'
  });
}
