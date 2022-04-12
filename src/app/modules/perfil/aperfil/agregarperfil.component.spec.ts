import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BEPerfilPanelComponent } from './borrareditarperfil.component';

describe('BEPerfilPanelComponent', () => {
  let component: BEPerfilPanelComponent;
  let fixture: ComponentFixture<BEPerfilPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BEPerfilPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BEPerfilPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
