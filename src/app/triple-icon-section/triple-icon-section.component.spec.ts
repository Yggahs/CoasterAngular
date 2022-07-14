import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleIconSectionComponent } from './triple-icon-section.component';

describe('TripleIconSectionComponent', () => {
  let component: TripleIconSectionComponent;
  let fixture: ComponentFixture<TripleIconSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripleIconSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleIconSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
