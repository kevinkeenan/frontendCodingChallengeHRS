import { MouseOverDirective } from './mouse-over.directive';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('MouseOverDirective', () => {
  let component: HomeComponent;
  let expected = '';
  let ele: ElementRef;
  let ac: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //declarations: [HomeComponent ]
    })
    .compileComponents();
  });
  // it('should create an instance', () => {
  //   const directive = new MouseOverDirective(ele, ac);
  //   expect(directive).toBeTruthy();
  // });
});

// @Component({
//   template: `
//   <h2 highlight="yellow">Something Yellow</h2>
//   <h2 highlight>The Default (Gray)</h2>
//   <h2>No Highlight</h2>
//   <input #box [highlight]="box.value" value="cyan"/>`
// })
// class TestComponent { }