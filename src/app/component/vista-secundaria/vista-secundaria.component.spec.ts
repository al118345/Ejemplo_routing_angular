import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSecundariaComponent } from './vista-secundaria.component';

describe('VistaSecundariaComponent', () => {
  let component: VistaSecundariaComponent;
  let fixture: ComponentFixture<VistaSecundariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaSecundariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
