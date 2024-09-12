import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutadorListComponent } from './lutador-list.component';

describe('LutadorListComponent', () => {
  let component: LutadorListComponent;
  let fixture: ComponentFixture<LutadorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LutadorListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LutadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
