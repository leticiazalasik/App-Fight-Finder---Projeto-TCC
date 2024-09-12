import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoLutasComponent } from './resultado-lutas.component';

describe('ResultadoLutasComponent', () => {
  let component: ResultadoLutasComponent;
  let fixture: ComponentFixture<ResultadoLutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultadoLutasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadoLutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
