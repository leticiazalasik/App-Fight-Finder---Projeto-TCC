import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencaLutadoresAutomaticaComponent } from './presenca-lutadores-automatica.component';

describe('PresencaLutadoresAutomaticaComponent', () => {
  let component: PresencaLutadoresAutomaticaComponent;
  let fixture: ComponentFixture<PresencaLutadoresAutomaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresencaLutadoresAutomaticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresencaLutadoresAutomaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
