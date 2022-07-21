import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenlayermapComponent } from './openlayermap.component';

describe('OpenlayermapComponent', () => {
  let component: OpenlayermapComponent;
  let fixture: ComponentFixture<OpenlayermapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenlayermapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenlayermapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
