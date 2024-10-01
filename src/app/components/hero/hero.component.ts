import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
