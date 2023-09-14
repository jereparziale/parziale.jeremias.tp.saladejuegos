import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselJuegosComponent } from './carrousel-juegos.component';

describe('CarrouselJuegosComponent', () => {
  let component: CarrouselJuegosComponent;
  let fixture: ComponentFixture<CarrouselJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselJuegosComponent]
    });
    fixture = TestBed.createComponent(CarrouselJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
