import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAfiliacionComponent } from './solicitar-afiliacion.component';

describe('SolicitarAfiliacionComponent', () => {
  let component: SolicitarAfiliacionComponent;
  let fixture: ComponentFixture<SolicitarAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarAfiliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
