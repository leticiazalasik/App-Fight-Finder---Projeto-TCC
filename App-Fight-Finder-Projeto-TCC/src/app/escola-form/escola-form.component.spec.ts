import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaFormComponent } from './escola-form.component';

describe('EscolaFormComponent', () => {
  let component: EscolaFormComponent;
  let fixture: ComponentFixture<EscolaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscolaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
