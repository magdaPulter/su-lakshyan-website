import { Component, WritableSignal, computed, signal } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-home-empower',
  standalone: true,
  imports: [],
  templateUrl: './home-empower.component.html',
  styleUrl: './home-empower.component.scss',
})
export class HomeEmpowerComponent {
  readonly leaf: Image = {
    name: 'leaf.png',
    alt: '',
    id: '1',
  };
  readonly plastic: Image = {
    name: 'plastic.png',
    alt: '',
    id: '2',
  };
  readonly woman: Image = {
    name: 'woman-pics-up-trash.png',
    alt: '',
    id: '3',
  };
  readonly underTheRoof: Image = {
    name: 'underTheRoof.png',
    alt: '',
    id: '4',
  };
  readonly womanSewing: Image = {
    name: 'woman-sewing.png',
    alt: '',
    id: '5',
  };
  readonly materialMeasuring: Image = {
    name: 'material-measuring.png',
    alt: '',
    id: '6',
  };

  allImages: WritableSignal<Image[]> = signal([
    this.plastic,
    this.leaf,
    this.woman,
    this.underTheRoof,
    this.womanSewing,
    this.materialMeasuring,
  ]);
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
}
