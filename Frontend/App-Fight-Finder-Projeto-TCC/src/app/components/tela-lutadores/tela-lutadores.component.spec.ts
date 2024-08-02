import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLutadoresComponent } from './tela-lutadores.component';

describe('TelaLutadoresComponent', () => {
  let component: TelaLutadoresComponent;
  let fixture: ComponentFixture<TelaLutadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaLutadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaLutadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
