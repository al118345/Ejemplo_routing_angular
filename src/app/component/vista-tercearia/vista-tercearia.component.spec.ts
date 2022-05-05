import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTerceariaComponent } from './vista-tercearia.component';

describe('VistaTerceariaComponent', () => {
  let component: VistaTerceariaComponent;
  let fixture: ComponentFixture<VistaTerceariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTerceariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTerceariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
