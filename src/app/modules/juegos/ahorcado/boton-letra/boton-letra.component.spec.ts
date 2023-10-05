import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLetraComponent } from './boton-letra.component';

describe('BotonLetraComponent', () => {
  let component: BotonLetraComponent;
  let fixture: ComponentFixture<BotonLetraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonLetraComponent]
    });
    fixture = TestBed.createComponent(BotonLetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
