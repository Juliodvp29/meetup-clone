import { Component } from '@angular/core';
import { DashboardProfileComponent } from '../../components/dashboard-profile/dashboard-profile';
import { DashboardStatsComponent } from '../../components/dashboard-stats/dashboard-stats';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardProfileComponent, DashboardStatsComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {}
