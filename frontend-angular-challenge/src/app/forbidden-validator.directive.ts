// Please see reference to custom validator documentation https://angular.io/guide/form-validation#reactive-component-class

import { Directive, Input } from '@angular/core';
import {
    AbstractControl, 
    NG_VALIDATORS, 
    Validator, 
    Validators, 
    ValidatorFn
} from '@angular/forms';
type ValidationErrors = {
  [key: string]: any;
};
@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    console.log("passing in string from input: " + this.forbiddenName);
    return this.forbiddenName ? forbiddenNameValidator(this.forbiddenName)(control)
                              : null;
  }
}
/** TODO: change to exactly match instead of contains */
export function forbiddenNameValidator(currentUsername: string): ValidatorFn {
  console.log("Validating whether or not username is not being changed");
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = currentUsername == (control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}