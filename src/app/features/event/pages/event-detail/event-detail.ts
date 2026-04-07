import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/core/models/event';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-event-detail',
  imports: [ButtonModule, DividerModule, TagModule, ProgressBarModule, AvatarModule],
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
    date: 'Apr 12',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200'
  });
}
