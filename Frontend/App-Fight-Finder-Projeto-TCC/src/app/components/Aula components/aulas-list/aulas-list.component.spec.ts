import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasListComponent } from './aulas-list.component';

describe('AulasListComponent', () => {
  let component: AulasListComponent;
  let fixture: ComponentFixture<AulasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AulasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AulasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
