import {Component, Type} from '@angular/core';
import { ComponentFixture, TestBed} from '@angular/core/testing';

export class TestHarness<T> {
  constructor(public component: T, public fixture: ComponentFixture<Component>) { }

  get hasComponentCreated() {
    return !!this.component;
  }

  detectChanges() {
    this.fixture.detectChanges();
  }
}

export function createTestHarness<T>(componentType: Type<T>): TestHarness<T> {
  let component: T;
  let fixture: ComponentFixture<T>;

  fixture = TestBed.createComponent<T>(componentType);
  component = fixture.componentInstance;
  fixture.detectChanges();

  return new TestHarness<T>(component, fixture);
}

// https://medium.com/swlh/simplifying-angular-unit-testing-fc09bf142a7a