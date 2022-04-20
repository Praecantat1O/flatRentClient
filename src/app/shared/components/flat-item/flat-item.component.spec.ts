import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatItemComponent } from './flat-item.component';

describe('FlatItemComponent', () => {
  let component: FlatItemComponent;
  let fixture: ComponentFixture<FlatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
