import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BEPuntoaypPanelComponent } from './borrareditarpuntoayp.component';

describe('BEPuntoaypPanelComponent', () => {
  let component: BEPuntoaypPanelComponent;
  let fixture: ComponentFixture<BEPuntoaypPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BEPuntoaypPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BEPuntoaypPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
