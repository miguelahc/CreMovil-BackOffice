import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BEUsuarioPanelComponent } from './borrareditarusuario.component';

describe('BEUsuarioPanelComponent', () => {
  let component: BEUsuarioPanelComponent;
  let fixture: ComponentFixture<BEUsuarioPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BEUsuarioPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BEUsuarioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
