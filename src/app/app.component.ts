import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { environment } from '@environment/environment';
import { ImageCarouselComponent } from '@components/image-carousel/image-carousel.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, ImageCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  currentIndex = 0;
  title = 'codingLandingPage';
  faBars = faBars;
  faBarsStaggered = faBarsStaggered;
  menuOpen: boolean = false;
  imagePath = environment.imagePath;
  images = [
    '/carousel-1.svg',
    '/carousel-2.svg',
    '/carousel-3.svg',
    '/carousel-4.svg',
    '/carousel-5.svg',
  ]

  constructor() {
    //
  }
  ngOnInit(): void {
    initFlowbite();
  }

  openMenu() {
    this.menuOpen = !this.menuOpen;
    return this.menuOpen;
  }

}
