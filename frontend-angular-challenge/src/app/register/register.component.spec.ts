import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import { UserService, AuthenticationService } from '../services';
import { User } from '../models/user.model';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [UserService, AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new user', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should create a new user', () => {
    component.registerForm.controls['username'].setValue('unitTestUserName');
    component.registerForm.controls['firstName'].setValue('unitTestFirst');
    component.registerForm.controls['lastName'].setValue('unitTEstLast');
    component.registerForm.controls['password'].setValue('unitTestPass');
    component.onSubmit();
    expect(component.loading).toEqual(true);
  });
  it('should fail creation with invalid password', () => {
    component.registerForm.controls['username'].setValue('unitTestUserName2');
    component.registerForm.controls['firstName'].setValue('unitTestFirst2');
    component.registerForm.controls['lastName'].setValue('unitTEstLast2');
    component.registerForm.controls['password'].setValue('short');
    expect(component.loading).toEqual(false);
  });

  it('should fail creation with an existing userName', () => {
    component.registerForm.controls['username'].setValue('unitTestUserName');
    component.registerForm.controls['firstName'].setValue('unitTestFirst2');
    component.registerForm.controls['lastName'].setValue('unitTEstLast2');
    component.registerForm.controls['password'].setValue('longEnough');
    component.onSubmit();
          //component.userService 
          console.log(component.registerForm.value);
          console.log(component.registerForm.controls['firstName'].value);
          component.registerForm.controls['username'].setValue('unitTestUserName');
    component.registerForm.controls['firstName'].setValue('unitTestFirst2nd');
    component.registerForm.controls['lastName'].setValue('unitTEstLast2nd');
    component.registerForm.controls['password'].setValue('longEnough');
    component.isError = true;//flag will be unticked upon successful return from submit
    component.onSubmit();
    expect(component.isError).toBe(true);
  });
});
