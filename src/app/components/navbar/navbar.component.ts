import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMenuOpen: WritableSignal<boolean> = signal(false);
  ngOnInit() {
    this.isMenuOpen.set(false);
  }

  close: string = '../../../assets/close.svg';
  open: string = '../../../assets/menu.svg';

  toggleMenu(): void {
    this.isMenuOpen.update((isMenuOpen) => !isMenuOpen);
  }
}
