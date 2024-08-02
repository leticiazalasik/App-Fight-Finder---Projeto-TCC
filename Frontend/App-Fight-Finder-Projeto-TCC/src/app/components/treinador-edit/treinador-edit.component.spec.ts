import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadorEditComponent } from './treinador-edit.component';

describe('TreinadorEditComponent', () => {
  let component: TreinadorEditComponent;
  let fixture: ComponentFixture<TreinadorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreinadorEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreinadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
