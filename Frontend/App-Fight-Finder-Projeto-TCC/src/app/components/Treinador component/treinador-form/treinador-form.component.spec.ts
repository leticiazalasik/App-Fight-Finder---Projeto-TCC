import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadorFormComponent } from './treinador-form.component';

describe('TreinadorFormComponent', () => {
  let component: TreinadorFormComponent;
  let fixture: ComponentFixture<TreinadorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreinadorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreinadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
