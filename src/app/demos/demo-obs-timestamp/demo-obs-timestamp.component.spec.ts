import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObsTimestampComponent } from './demo-obs-timestamp.component';

describe('DemoObsTimestampComponent', () => {
  let component: DemoObsTimestampComponent;
  let fixture: ComponentFixture<DemoObsTimestampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoObsTimestampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoObsTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
