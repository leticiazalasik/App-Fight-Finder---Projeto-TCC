import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarLutaComponent } from './gerar-luta.component';

describe('GerarLutaComponent', () => {
  let component: GerarLutaComponent;
  let fixture: ComponentFixture<GerarLutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerarLutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerarLutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
