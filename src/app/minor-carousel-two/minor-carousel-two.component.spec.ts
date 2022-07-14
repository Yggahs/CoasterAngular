import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorCarouselTwoComponent } from './minor-carousel-two.component';

describe('MinorCarouselTwoComponent', () => {
  let component: MinorCarouselTwoComponent;
  let fixture: ComponentFixture<MinorCarouselTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorCarouselTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorCarouselTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
