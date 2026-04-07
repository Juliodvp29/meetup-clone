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
      date: 'Apr 12',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Open Mic Night Medellín',
      category: 'Music',
      location: 'Medellín',
      date: 'Apr 18',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'Design Thinking Workshop',
      category: 'Arts',
      location: 'Cali',
      date: 'Apr 20',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '4',
      title: 'Mountain Bike Trail Run',
      category: 'Sports',
      location: 'Antioquia',
      date: 'Apr 22',
      image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '5',
      title: 'Node.js Backend Patterns',
      category: 'Tech',
      location: 'Online',
      date: 'Apr 25',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '6',
      title: 'Jazz in the Park',
      category: 'Music',
      location: 'Bogotá',
      date: 'Apr 28',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '7',
      title: 'Photography Walk: Old City',
      category: 'Outdoors',
      location: 'Cartagena',
      date: 'May 02',
      image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '8',
      title: 'Startup Coffee Morning',
      category: 'Tech',
      location: 'Medellín',
      date: 'May 05',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '9',
      title: 'Yoga and Meditation Retreat',
      category: 'Health',
      location: 'Santa Marta',
      date: 'May 10',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '10',
      title: 'Angular 21 Masterclass',
      category: 'Tech',
      location: 'Online',
      date: 'May 15',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '11',
      title: 'Craft Beer Tasting Night',
      category: 'Food',
      location: 'Bogotá',
      date: 'May 18',
      image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '12',
      title: 'Public Speaking for Devs',
      category: 'Learning',
      location: 'Online',
      date: 'May 20',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '13',
      title: 'Local Art Exhibition',
      category: 'Arts',
      location: 'Barranquilla',
      date: 'May 22',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '14',
      title: 'Trail Running Challenge',
      category: 'Sports',
      location: 'Huila',
      date: 'May 25',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '15',
      title: 'Product Management 101',
      category: 'Learning',
      location: 'Manizales',
      date: 'May 28',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '16',
      title: 'Deep House Sunset Session',
      category: 'Music',
      location: 'Santa Marta',
      date: 'Jun 01',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800'
    }
  ]);

}
