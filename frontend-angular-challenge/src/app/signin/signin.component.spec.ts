import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { SigninComponent } from './signin.component';
import {RouterTestingModule} from '@angular/router/testing';
import { RegisterComponent } from '../register/register.component';

//set the order of the unit tests so registerin happens before login
describe('SigninComponent', () => {
  let component: SigninComponent;
  let registerComponent: RegisterComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponent, RegisterComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
          ReactiveFormsModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to The HRS Angular Coding Challenge!');
  });

  it('should login properly', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  //register a user before
  // it('should sign in properly', () => {
  //   registerComponent.ngOnInit();
  //   registerComponent.registerForm.controls['username'].setValue('unitTestUserName');
  //   registerComponent.registerForm.controls['firstName'].setValue('unitTestFirst2');
  //   registerComponent.registerForm.controls['lastName'].setValue('unitTEstLast2');
  //   registerComponent.registerForm.controls['password'].setValue('longEnough');
  //   console.log("registerComp");
  //   registerComponent.onSubmit();
  //   console.log("AfterRegisterComp");

  //   component.loginForm.controls['username'].setValue('unitTestUserName');
  //   component.loginForm.controls['password'].setValue('longEnough');
  //   component.onSubmit();
  //   expect(component.isError).toBe(false);
  // });


});
