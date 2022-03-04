//Custom validator bug Fix https://stackoverflow.com/questions/50548062/expected-validator-to-return-promise-or-observable

import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user.model';
import { UserService, AuthenticationService } from '../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forbiddenNameValidator } from '../forbidden-validator.directive';
import { ForbiddenValidatorDirective } from '../forbidden-validator.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  editUserNameForm: FormGroup;
  currentUser: User;
  users = [];
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private authenticationService: AuthenticationService,
      private router: Router,
      private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }


  /**
   * added custom validator to ensure a user cannot change username to the same username as before
   */
  ngOnInit() {
    this.loadAllUsers();
    //console.log('inside home component');
    //this.showEditUser();
    this.editUserNameForm = this.formBuilder.group({
      username: ['', [Validators.required, forbiddenNameValidator(this.currentUser.username)]]
    });
    //console.log(' home component end on init');
  }

  deleteUser(id: number) {
    this.userService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
  }

  /*
    reuse format from onSubmit new User
    Pass in the entire user in case future requirements need more options
    maybe you may want to change the lastname and the userName?
  */
    editUser() {
    console.log('inside edit userName');
    this.submitted = true;

    // stop here if form is invalid
    if (this.editUserNameForm.invalid) {
      console.log("invalid" + this.editUserNameForm.errors);
      return;
    }

    this.loading = true;
    console.log(this.editUserNameForm.value);
    console.log(this.editUserNameForm.controls['username'].value);
    this.userService.editUserName(this.currentUser, this.editUserNameForm.controls['username'].value)
        .pipe(first())
        .subscribe(
            data => {
              this.loading = false;
              this.router.navigate(['/']);
            },
            error => {
              this.loading = false;
            });
  }

  /*
  onClick show editUserNameForm
  */
  showEditUser() {
    document.getElementById('editUserNameForm').style.display = "block";
  }

  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
  }

    // convenience getter for easy access to form fields
    get f() { return this.editUserNameForm.controls; }

}
