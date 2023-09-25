import { Component } from '@angular/core';

declare var $: any;
declare function HOME_INIT([]): any;
declare function INIT_SWIPER([]): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      HOME_INIT($);
      INIT_SWIPER($);
    }, 50);
  }
}
