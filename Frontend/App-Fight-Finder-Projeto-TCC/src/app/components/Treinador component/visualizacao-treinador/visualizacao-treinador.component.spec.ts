import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoTreinadorComponent } from './visualizacao-treinador.component';

describe('VisualizacaoTreinadorComponent', () => {
  let component: VisualizacaoTreinadorComponent;
  let fixture: ComponentFixture<VisualizacaoTreinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizacaoTreinadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizacaoTreinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
