import { Component, Input, type WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard-profile',
  imports: [CommonModule, AvatarModule, ButtonModule],
  templateUrl: './dashboard-profile.html',
})
export class DashboardProfileComponent {
  @Input() activeTab!: WritableSignal<'events' | 'groups' | 'saved'>;

  changeTab(tab: 'events' | 'groups' | 'saved') {
    this.activeTab.set(tab);
  }
}
