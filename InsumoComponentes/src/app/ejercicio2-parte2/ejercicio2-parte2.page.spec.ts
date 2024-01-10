import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio2Parte2Page } from './ejercicio2-parte2.page';

describe('Ejercicio2Parte2Page', () => {
  let component: Ejercicio2Parte2Page;
  let fixture: ComponentFixture<Ejercicio2Parte2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio2Parte2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
