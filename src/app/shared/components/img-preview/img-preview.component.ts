import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

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
    return this.remove.emit(id);
  }
}
