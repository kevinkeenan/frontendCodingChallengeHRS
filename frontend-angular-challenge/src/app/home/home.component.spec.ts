import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
// import { MouseOverDirective } from '../mouse-over.directive';
import { ForbiddenValidatorDirective } from '../forbidden-validator.directive';
import { UserService, AuthenticationService } from '../services';
import { first } from 'rxjs/operators';

import { HomeComponent } from './home.component';
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from '../helpers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../models/user.model';

currentUser: User;

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, ForbiddenValidatorDirective],
            imports: [
                FormsModule,
                HttpClientModule,
                HttpClientTestingModule, 
                ReactiveFormsModule,
                RouterTestingModule,
              ],
            //   providers: [
            //     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            //     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
            //     // provider used to create fake backend
            //     fakeBackendProvider,
            //     UserService,
            //     AuthenticationService
            //   ]
        })
            .compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        console.log(component.currentUser);
        //component.editUserNameForm.controls['username'].setValue('kevin');
        //component.ngOnInit();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });

});