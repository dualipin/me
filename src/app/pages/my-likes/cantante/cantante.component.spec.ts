import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantanteComponent } from './cantante.component';

describe('CantanteComponent', () => {
  let component: CantanteComponent;
  let fixture: ComponentFixture<CantanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CantanteComponent]
    });
    fixture = TestBed.createComponent(CantanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
