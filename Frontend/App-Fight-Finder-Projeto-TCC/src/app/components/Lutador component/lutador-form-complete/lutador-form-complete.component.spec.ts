import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutadorFormCompleteComponent } from './lutador-form-complete.component';

describe('LutadorFormCompleteComponent', () => {
  let component: LutadorFormCompleteComponent;
  let fixture: ComponentFixture<LutadorFormCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LutadorFormCompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LutadorFormCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
