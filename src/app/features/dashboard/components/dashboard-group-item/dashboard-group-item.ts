import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard-group-item',
  imports: [CommonModule, AvatarModule, ButtonModule],
  templateUrl: './dashboard-group-item.html'
})
export class DashboardGroupItemComponent {
  group = input.required<any>();
}
