import { Component, Renderer2, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'jules-demo';
  isDarkMode = false;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  private updateTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        this.renderer.addClass(document.body, 'dark-mode');
      } else {
        this.renderer.removeClass(document.body, 'dark-mode');
      }
    }
  }
}
