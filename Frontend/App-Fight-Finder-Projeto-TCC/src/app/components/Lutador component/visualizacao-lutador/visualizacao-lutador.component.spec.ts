import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoLutadorComponent } from './visualizacao-lutador.component';

describe('VisualizacaoLutadorComponent', () => {
  let component: VisualizacaoLutadorComponent;
  let fixture: ComponentFixture<VisualizacaoLutadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizacaoLutadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizacaoLutadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
