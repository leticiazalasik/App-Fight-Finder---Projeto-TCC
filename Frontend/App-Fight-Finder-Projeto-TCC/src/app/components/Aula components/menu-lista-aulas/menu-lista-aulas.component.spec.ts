import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaAulasComponent } from './menu-lista-aulas.component';

describe('MenuListaAulasComponent', () => {
  let component: MenuListaAulasComponent;
  let fixture: ComponentFixture<MenuListaAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuListaAulasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuListaAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
