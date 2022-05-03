import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryThumbsComponent } from './gallery-thumbs.component';

describe('GalleryThumbsComponent', () => {
  let component: GalleryThumbsComponent;
  let fixture: ComponentFixture<GalleryThumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryThumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryThumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
