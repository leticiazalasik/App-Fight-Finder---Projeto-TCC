import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAulasComponent } from './tela-aulas.component';

describe('TelaAulasComponent', () => {
  let component: TelaAulasComponent;
  let fixture: ComponentFixture<TelaAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaAulasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
