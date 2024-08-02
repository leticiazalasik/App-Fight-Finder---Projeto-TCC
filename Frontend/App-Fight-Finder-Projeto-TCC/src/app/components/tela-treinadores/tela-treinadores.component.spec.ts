import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTreinadoresComponent } from './tela-treinadores.component';

describe('TelaTreinadoresComponent', () => {
  let component: TelaTreinadoresComponent;
  let fixture: ComponentFixture<TelaTreinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaTreinadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaTreinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
