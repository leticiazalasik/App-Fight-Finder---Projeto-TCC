import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunavComponent } from './menunav.component';

describe('MenunavComponent', () => {
  let component: MenunavComponent;
  let fixture: ComponentFixture<MenunavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenunavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenunavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
