import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Labler';
  public smallScreen: boolean = false;

  constructor() {
    this.smallScreen = window.innerWidth < 1200;
  }

  public openLink(url: string): void {
    window.open(url, '_blank');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.smallScreen = window.innerWidth < 1200;
  }
}
