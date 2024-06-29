import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCriarContaComponent } from './menu-criar-conta.component';

describe('MenuCriarContaComponent', () => {
  let component: MenuCriarContaComponent;
  let fixture: ComponentFixture<MenuCriarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuCriarContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuCriarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
