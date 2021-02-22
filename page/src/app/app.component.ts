import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Labler';

  constructor() {}

  public openLink(url: string): void {
    window.open(url, '_blank');
  }
}
