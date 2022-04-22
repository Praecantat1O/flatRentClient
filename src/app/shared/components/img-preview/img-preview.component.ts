import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-preview',
  templateUrl: './img-preview.component.html',
  styleUrls: ['./img-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgPreviewComponent {
  @Input() files: any[] = [];
  @Output() remove = new EventEmitter();

  public onRemove(id: number) {
    // this.files = this.files.filter((item) => item.id !== id);
    return this.remove.emit(id);
  }
}
