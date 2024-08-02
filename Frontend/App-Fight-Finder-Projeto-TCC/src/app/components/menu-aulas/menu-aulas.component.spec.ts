import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAulasComponent } from './menu-aulas.component';

describe('MenuAulasComponent', () => {
  let component: MenuAulasComponent;
  let fixture: ComponentFixture<MenuAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuAulasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
