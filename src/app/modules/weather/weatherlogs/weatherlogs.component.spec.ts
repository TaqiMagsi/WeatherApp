import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherlogsComponent } from './weatherlogs.component';

describe('WeatherlogsComponent', () => {
  let component: WeatherlogsComponent;
  let fixture: ComponentFixture<WeatherlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
