import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballComponent } from './football.component';

describe('FootballComponent', () => {
  let component: FootballComponent;
  let fixture: ComponentFixture<FootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
