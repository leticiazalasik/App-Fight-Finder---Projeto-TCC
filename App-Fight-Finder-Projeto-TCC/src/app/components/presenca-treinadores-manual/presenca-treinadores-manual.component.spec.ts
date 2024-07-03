import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencaTreinadoresManualComponent } from './presenca-treinadores-manual.component';

describe('PresencaTreinadoresManualComponent', () => {
  let component: PresencaTreinadoresManualComponent;
  let fixture: ComponentFixture<PresencaTreinadoresManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresencaTreinadoresManualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresencaTreinadoresManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
