import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkThemeClass = 'app-dark';

  constructor() {}

  // Adiciona a classe 'app-dark' ao body para ativar o modo escuro
  enableDarkMode(): void {
    document.body.classList.add(this.darkThemeClass);
  }

  // Remove a classe 'app-dark' do body para desativar o modo escuro
  disableDarkMode(): void {
    document.body.classList.remove(this.darkThemeClass);
  }

  // Verifica se o modo escuro está ativo
  isDarkModeEnabled(): boolean {
    return document.body.classList.contains(this.darkThemeClass);
  }

  // Alterna entre o modo claro e escuro
  toggleDarkMode(): void {
    if (this.isDarkModeEnabled()) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }
}
