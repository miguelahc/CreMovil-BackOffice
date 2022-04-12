import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BEParametroPanelComponent } from './borrareditarparametro.component';

describe('BEParametroPanelComponent', () => {
  let component: BEParametroPanelComponent;
  let fixture: ComponentFixture<BEParametroPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BEParametroPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BEParametroPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
