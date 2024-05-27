import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutadorFormComponent } from './lutador-form.component';

describe('LutadorFormComponent', () => {
  let component: LutadorFormComponent;
  let fixture: ComponentFixture<LutadorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LutadorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LutadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
