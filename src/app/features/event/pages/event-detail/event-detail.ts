import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '@app/core/models/event';
import { EventService } from '@app/core/services/event';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  imports: [CommonModule, ButtonModule, DividerModule, TagModule, ProgressBarModule, AvatarModule],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailComponent {
  private route = inject(ActivatedRoute);
  private eventService = inject(EventService);
  private allEvents = this.eventService.getEvents();

  eventId = computed(() => this.route.snapshot.params['id']);

  event = computed(() => {
    const id = this.eventId();
    return this.allEvents().find(e => e.id === id);
  });

  constructor() {
    effect(() => {
      this.eventId();
      window.scrollTo(0, 0);
    });
  }

  get eventNotFound(): boolean {
    return !this.event();
  }
}
