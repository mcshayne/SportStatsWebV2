import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorballComponent } from './floorball.component';

describe('FloorballComponent', () => {
  let component: FloorballComponent;
  let fixture: ComponentFixture<FloorballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
