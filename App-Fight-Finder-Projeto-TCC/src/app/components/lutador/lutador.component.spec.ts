import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutadorComponent } from './lutador.component';

describe('LutadorComponent', () => {
  let component: LutadorComponent;
  let fixture: ComponentFixture<LutadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LutadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LutadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
