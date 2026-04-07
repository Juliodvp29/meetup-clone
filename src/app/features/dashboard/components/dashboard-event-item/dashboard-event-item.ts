import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard-event-item',
  imports: [CommonModule, AvatarModule, TagModule, ButtonModule],
  templateUrl: './dashboard-event-item.html'
})
export class DashboardEventItemComponent {
  event = input.required<any>();
}
    