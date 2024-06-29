import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaEditComponent } from './escola-edit.component';

describe('EscolaEditComponent', () => {
  let component: EscolaEditComponent;
  let fixture: ComponentFixture<EscolaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscolaEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
