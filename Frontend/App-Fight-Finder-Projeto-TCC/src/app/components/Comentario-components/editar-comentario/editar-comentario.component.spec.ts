import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComentarioComponent } from './editar-comentario.component';

describe('EditarComentarioComponent', () => {
  let component: EditarComentarioComponent;
  let fixture: ComponentFixture<EditarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarComentarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
