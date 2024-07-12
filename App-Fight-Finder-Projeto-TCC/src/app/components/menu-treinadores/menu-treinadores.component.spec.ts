import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTreinadoresComponent } from './menu-treinadores.component';

describe('MenuTreinadoresComponent', () => {
  let component: MenuTreinadoresComponent;
  let fixture: ComponentFixture<MenuTreinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuTreinadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuTreinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
