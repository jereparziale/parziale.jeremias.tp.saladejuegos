import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayoMenorComponent } from './mayo-menor.component';

describe('MayoMenorComponent', () => {
  let component: MayoMenorComponent;
  let fixture: ComponentFixture<MayoMenorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayoMenorComponent]
    });
    fixture = TestBed.createComponent(MayoMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
