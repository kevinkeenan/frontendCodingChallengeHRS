// import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';
// @Component({
//   template: `
//   <h2 highlight="yellow">Something Yellow</h2>
//   <h2 highlight>The Default (Gray)</h2>
//   <h2>No Highlight</h2>
//   <input #box [highlight]="box.value" value="cyan"/>`
// })
// class TestComponent { }
let fixture;
let input: HTMLInputElement;



describe('ForbiddenValidatorDirective', () => {

  beforeEach(() => {
     fixture = TestBed.configureTestingModule({
      declarations: [ ForbiddenValidatorDirective ]
    });
    // .createComponent(TestComponent);
  
    //fixture.detectChanges(); // initial binding
  
    // all elements with an attached ForbiddenValidatorDirective
    //des = fixture.debugElement.queryAll(By.directive(ForbiddenValidatorDirective));

  });
  
  
  
  it('should create an instance', () => {
    const directive = new ForbiddenValidatorDirective();
    expect(directive).toBeTruthy();
  });


});
