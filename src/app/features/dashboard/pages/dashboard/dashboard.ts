import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '@app/core/models/event';
import { DashboardProfileComponent } from '../../components/dashboard-profile/dashboard-profile';
import { DashboardStatsComponent } from '../../components/dashboard-stats/dashboard-stats';
import { DashboardEventItemComponent } from '../../components/dashboard-event-item/dashboard-event-item';
import { DashboardGroupItemComponent } from '../../components/dashboard-group-item/dashboard-group-item';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardProfileComponent, DashboardStatsComponent, DashboardEventItemComponent, DashboardGroupItemComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  
  activeTab = signal<'events' | 'groups' | 'saved'>('events');

  events = signal<Event[]>([
    {
      id: 'd1',
      title: 'React Meetup Colombia 2025',
      category: 'Tech',
      date: 'Sat, Apr 12 · 6:00 PM',
      location: 'Bogotá · Online',
      status: 'Going',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop'
    },
    {
      id: 'd2',
      title: 'UX/UI Design Workshop',
      category: 'Design',
      date: 'Sat, Apr 26 · 10:00 AM',
      location: 'Online · Zoom',
      status: 'Going',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop'
    },
    {
      id: 'd3',
      title: 'Python DataSci Bootcamp',
      category: 'Tech',
      date: 'Sun, May 4 · 9:00 AM',
      location: 'Cali · Online',
      status: 'Interested',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=200&h=200&fit=crop'
    },
    {
      id: 'd4',
      title: 'Fotografía Urbana Walk',
      category: 'Art',
      date: 'Sat, May 10 · 7:00 AM',
      location: 'Bogotá, Candelaria',
      status: 'Interested',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop'
    }
  ]);

  groups = signal([
    {
      id: 'g1',
      title: 'Dev Community CO',
      icon: 'pi pi-code',
      members: '1,200',
      nextEvent: 'Apr 18',
      avatarLabel: 'GR',
      actionLabel: 'Leave',
      actionStyle: 'danger'
    },
    {
      id: 'g2',
      title: 'MDE Arts Collective',
      icon: 'pi pi-palette',
      members: '1,200',
      nextEvent: 'Apr 18',
      avatarLabel: 'GR',
      actionLabel: 'Leave',
      actionStyle: 'danger'
    },
    {
      id: 'g3',
      title: 'Bienestar CO',
      icon: 'pi pi-sparkles',
      members: '1,200',
      nextEvent: 'Apr 18',
      avatarLabel: 'GR',
      actionLabel: 'View group',
      actionStyle: 'primary'
    }
  ]);
}
