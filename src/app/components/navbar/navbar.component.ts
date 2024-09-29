import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '@services/theme.service';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  items: MenuItem[] | undefined;
  isDark = false;

  constructor (private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadMenu();
  }

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
    this.isDark = this.themeService.isDarkModeEnabled();
  }

  private loadMenu() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
          label: 'Features',
          icon: 'pi pi-star'
      },
      {
          label: 'Projects',
          icon: 'pi pi-search',
          items: [
              {
                  label: 'Core',
                  icon: 'pi pi-bolt',
                  shortcut: '⌘+S'
              },
              {
                  label: 'Blocks',
                  icon: 'pi pi-server',
                  shortcut: '⌘+B'
              },
              {
                  label: 'UI Kit',
                  icon: 'pi pi-pencil',
                  shortcut: '⌘+U'
              },
              {
                  separator: true
              },
              {
                  label: 'Templates',
                  icon: 'pi pi-palette',
                  items: [
                      {
                          label: 'Apollo',
                          icon: 'pi pi-palette',
                          badge: '2'
                      },
                      {
                          label: 'Ultima',
                          icon: 'pi pi-palette',
                          badge: '3'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
          badge: '3'
      }
      ];
  }
}
