import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from '@app/shared/components/event-card/event-card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EventService } from '@app/core/services/event';

interface Category {
  label: string;
  icon: string;
  color: string;
  value: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, EventCardComponent, InputTextModule, ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private eventService = inject(EventService);
  private events = this.eventService.getEvents();

  searchTerm = signal<string>('');
  selectedCategory = signal<string | null>(null);

  categories = signal<Category[]>([
    { label: 'Music', icon: 'pi-microphone', color: 'text-purple-500', value: 'Music' },
    { label: 'Tech', icon: 'pi-desktop', color: 'text-blue-500', value: 'Tech' },
    { label: 'Arts', icon: 'pi-palette', color: 'text-pink-500', value: 'Arts' },
    { label: 'Sports', icon: 'pi-map', color: 'text-emerald-500', value: 'Sports' },
    { label: 'Food', icon: 'pi-compass', color: 'text-orange-500', value: 'Food' },
    { label: 'Outdoors', icon: 'pi-image', color: 'text-teal-500', value: 'Outdoors' },
    { label: 'Learning', icon: 'pi-book', color: 'text-red-500', value: 'Learning' },
    { label: 'Culture', icon: 'pi-users', color: 'text-indigo-500', value: 'Culture' },
    { label: 'Health', icon: 'pi-heart', color: 'text-rose-500', value: 'Health' }
  ]);

  filteredEvents = computed(() => {
    const search = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();

    return this.events().filter(event => {
      const matchesSearch = !search || 
        event.title.toLowerCase().includes(search) ||
        event.location.toLowerCase().includes(search) ||
        event.category.toLowerCase().includes(search);

      const matchesCategory = !category || event.category === category;

      return matchesSearch && matchesCategory;
    });
  });

  hasResults = computed(() => this.filteredEvents().length > 0);

  selectCategory(category: string | null): void {
    this.selectedCategory.set(
      this.selectedCategory() === category ? null : category
    );
  }

  isCategorySelected(category: string): boolean {
    return this.selectedCategory() === category;
  }

}
