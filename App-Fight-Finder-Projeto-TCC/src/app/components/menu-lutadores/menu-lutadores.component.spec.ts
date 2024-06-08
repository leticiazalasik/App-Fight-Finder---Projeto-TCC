import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLutadoresComponent } from './menu-lutadores.component';

describe('MenuLutadoresComponent', () => {
  let component: MenuLutadoresComponent;
  let fixture: ComponentFixture<MenuLutadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuLutadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLutadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
