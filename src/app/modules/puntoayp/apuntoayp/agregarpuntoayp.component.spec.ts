import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APuntoaypPanelComponent } from './agregarpuntoayp.component';

describe('APuntoaypPanelComponent', () => {
  let component: APuntoaypPanelComponent;
  let fixture: ComponentFixture<APuntoaypPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APuntoaypPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APuntoaypPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
