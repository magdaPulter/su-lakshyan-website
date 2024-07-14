import {
  Component,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Image } from '../../models/image.model';
import { CarouselServiceService } from '../../services/carousel-service.service';

@Component({
  selector: 'app-home-empower',
  standalone: true,
  imports: [],
  templateUrl: './home-empower.component.html',
  styleUrl: './home-empower.component.scss',
})
export class HomeEmpowerComponent {
  images = inject(CarouselServiceService).getImage();
  allImages: WritableSignal<Image[]> = signal(this.images);
  firstIndex: WritableSignal<number> = signal(1);
  middleIndex: WritableSignal<number> = signal(2);
  lastIndex: WritableSignal<number> = signal(3);

  selected = computed(() =>
    Array(
      this.allImages()[this.firstIndex()],
      this.allImages()[this.middleIndex()],
      this.allImages()[this.lastIndex()]
    )
  );

  selectedMobile = computed(() => this.allImages()[this.lastIndex()]);

  setIndexLeft(selectedIndex: WritableSignal<number>) {
    if (selectedIndex() < 1) {
      selectedIndex.set(this.allImages().length);
    }
    selectedIndex.update((v) => v - 1);
  }

  setIndexRight(selectedIndex: WritableSignal<number>) {
    if (selectedIndex() === this.allImages().length - 1) {
      selectedIndex.set(-1);
    }
    selectedIndex.update((v) => v + 1);
  }

  onLeftClicked() {
    this.setIndexLeft(this.firstIndex);
    this.setIndexLeft(this.middleIndex);
    this.setIndexLeft(this.lastIndex);
  }

  onRightClicked() {
    this.setIndexRight(this.firstIndex);
    this.setIndexRight(this.middleIndex);
    this.setIndexRight(this.lastIndex);
  }

  onLeftMobileClicked() {
    console.log(this.selectedMobile(), this.lastIndex());
    this.setIndexLeft(this.lastIndex);
  }

  onRightMobileClicked() {
    this.setIndexRight(this.lastIndex);
    console.log(this.selectedMobile(), this.lastIndex());
  }
}
