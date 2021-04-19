import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ten12',
  templateUrl: './ten12.component.html',
  styleUrls: ['./ten12.component.scss']
})
export class Ten12Component implements OnInit {
  fixNav: 'none' | 'blur' | null = null;
  constructor() { }
  ngOnInit(): void {
  }
  // adding condition style to navbar on scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const num = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(num);
    if (num > 100 && num < 199) {
      this.fixNav = 'none';
      console.log(this.fixNav);
    }
    else if (num > 200) {
      this.fixNav = 'blur';
    }
    else {
      this.fixNav = null;
    }
  }
}
