import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatCreationComponent } from './flat-creation.component';

describe('FlatCreationComponent', () => {
  let component: FlatCreationComponent;
  let fixture: ComponentFixture<FlatCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
