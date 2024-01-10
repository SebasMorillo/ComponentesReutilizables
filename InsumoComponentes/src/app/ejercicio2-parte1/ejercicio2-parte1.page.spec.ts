import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio2Parte1Page } from './ejercicio2-parte1.page';

describe('Ejercicio2Parte1Page', () => {
  let component: Ejercicio2Parte1Page;
  let fixture: ComponentFixture<Ejercicio2Parte1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio2Parte1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
