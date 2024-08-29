import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusentesAulasComponent } from './ausentes-aulas.component';

describe('AusentesAulasComponent', () => {
  let component: AusentesAulasComponent;
  let fixture: ComponentFixture<AusentesAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AusentesAulasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AusentesAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
