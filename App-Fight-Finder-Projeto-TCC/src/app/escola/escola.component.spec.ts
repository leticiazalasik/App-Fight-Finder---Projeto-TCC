import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaComponent } from './escola.component';

describe('EscolaComponent', () => {
  let component: EscolaComponent;
  let fixture: ComponentFixture<EscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
