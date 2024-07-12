import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaTreinadoresComponent } from './menu-lista-treinadores.component';

describe('MenuListaTreinadoresComponent', () => {
  let component: MenuListaTreinadoresComponent;
  let fixture: ComponentFixture<MenuListaTreinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuListaTreinadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuListaTreinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
