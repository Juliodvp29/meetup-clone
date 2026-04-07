import { Component } from '@angular/core';
import { DashboardProfileComponent } from '../../components/dashboard-profile/dashboard-profile';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardProfileComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {}
