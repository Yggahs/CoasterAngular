import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorCarouselOneComponent } from './minor-carousel-one.component';

describe('MinorCarouselOneComponent', () => {
  let component: MinorCarouselOneComponent;
  let fixture: ComponentFixture<MinorCarouselOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorCarouselOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorCarouselOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
