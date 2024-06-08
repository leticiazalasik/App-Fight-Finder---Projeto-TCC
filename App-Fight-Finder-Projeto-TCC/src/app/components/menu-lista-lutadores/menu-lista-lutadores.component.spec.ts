import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaLutadoresComponent } from './menu-lista-lutadores.component';

describe('MenuListaLutadoresComponent', () => {
  let component: MenuListaLutadoresComponent;
  let fixture: ComponentFixture<MenuListaLutadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuListaLutadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuListaLutadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
