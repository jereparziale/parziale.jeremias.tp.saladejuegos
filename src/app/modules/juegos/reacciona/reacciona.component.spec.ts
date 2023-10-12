import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaccionaComponent } from './reacciona.component';

describe('ReaccionaComponent', () => {
  let component: ReaccionaComponent;
  let fixture: ComponentFixture<ReaccionaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReaccionaComponent]
    });
    fixture = TestBed.createComponent(ReaccionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
