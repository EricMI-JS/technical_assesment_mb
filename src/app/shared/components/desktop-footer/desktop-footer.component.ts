import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-footer',
  templateUrl: './desktop-footer.component.html',
  styleUrls: ['./desktop-footer.component.scss']
})
export class DesktopFooterComponent {
  currentYear = new Date().getFullYear();
} 