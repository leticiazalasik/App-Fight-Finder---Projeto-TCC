import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentesAulaComponent } from './presentes-aula.component';

describe('PresentesAulaComponent', () => {
  let component: PresentesAulaComponent;
  let fixture: ComponentFixture<PresentesAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentesAulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentesAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
