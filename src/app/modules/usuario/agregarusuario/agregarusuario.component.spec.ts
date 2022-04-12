import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AUsuarioPanelComponent } from './agregarusuario.component';

describe('AUsuarioPanelComponent', () => {
  let component: AUsuarioPanelComponent;
  let fixture: ComponentFixture<AUsuarioPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AUsuarioPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AUsuarioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
