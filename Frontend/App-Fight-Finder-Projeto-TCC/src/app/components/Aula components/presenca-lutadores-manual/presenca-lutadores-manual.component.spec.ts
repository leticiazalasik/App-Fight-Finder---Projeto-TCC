import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencaAlunosManualComponent } from './presenca-lutadores-manual.component';

describe('PresencaAlunosManualComponent', () => {
  let component: PresencaAlunosManualComponent;
  let fixture: ComponentFixture<PresencaAlunosManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresencaAlunosManualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresencaAlunosManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
