import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatillasComponent } from './zapatillas.component';

describe('ZapatillasComponent', () => {
  let component: ZapatillasComponent;
  let fixture: ComponentFixture<ZapatillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapatillasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapatillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
