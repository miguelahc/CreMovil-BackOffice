import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoaypComponent } from './puntoayp.component';

describe('PuntoaypComponent', () => {
  let component: PuntoaypComponent;
  let fixture: ComponentFixture<PuntoaypComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoaypComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoaypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
