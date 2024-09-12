import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutadorEditComponent } from './lutador-edit.component';

describe('LutadorEditComponent', () => {
  let component: LutadorEditComponent;
  let fixture: ComponentFixture<LutadorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LutadorEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LutadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
