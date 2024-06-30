import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-read-more-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-more-btn.component.html',
  styleUrl: './read-more-btn.component.scss',
})
export class ReadMoreBtnComponent {
  @Input() isAboutPage!: boolean;
}
