import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadorListComponent } from './treinador-list.component';

describe('TreinadorListComponent', () => {
  let component: TreinadorListComponent;
  let fixture: ComponentFixture<TreinadorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreinadorListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreinadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
