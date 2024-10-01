import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { HeroComponent } from "./components/hero/hero.component";
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    ChipModule,
    NavbarComponent,
    HeroComponent,
    CardModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  items: MenuItem[] | undefined;
  isDark = false;
  title = 'landing-page';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primeNgConfigure();
  }

  private primeNgConfigure() {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
  }
}
