import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/layout/header/header";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, CardModule, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
} 
