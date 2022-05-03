import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery-thumbs',
  templateUrl: './gallery-thumbs.component.html',
  styleUrls: ['./gallery-thumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryThumbsComponent implements OnInit {
  @Input() photoUrls: string[];

  public images: GalleryItem[];

  ngOnInit() {
    this.images = this.photoUrls.map(img => new ImageItem({ src: img, thumb: img }));
  }
}
