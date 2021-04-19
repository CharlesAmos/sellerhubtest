import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  staff_more = true;
  sp_more = true;
  delegate_more = true;
  mobile_menu = false;
  resource_more = false;
  user: any;
  name = '';
  menu = [
    { path: '', icon: '../../../assets/icons/icon - home.svg', title: 'Dashboard' },
    { path: 'product', icon: '../../../assets/icons/icon - products (2).svg', title: 'Add Product' },
    { path: 'order', icon: '../../../assets/icons/icon - order.svg', title: 'Order' },
    { path: 'messages', icon: '../../../assets/icons/icon - message (1).svg', title: 'Messages' },
    { path: 'manage', icon: '../../../assets/icons/icon - products.svg', title: 'Manage Products' },
    { path: 'coupon', icon: '../../../assets/icons/icon - coupon.svg', title: 'Coupon' },
    { path: 'advertise', icon: '../../../assets/icons/icon - advertise.svg', title: 'Adsvertise' },
    { path: 'settings', icon: '../../../assets/icons/icon - settings.svg', title: 'Settings' },
    // { path: 'logout', title: 'Logout' },

  ];
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.clickOutside();
  }
  clickOutside(): void {
    const self = this;
    $(document).mouseup((e: any) => {
      const container = $('.sidebar');
      // If the target of the click isn't the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        self.mobile_menu = false;
      }
    });
  }
  toggleMenu(): void {
    this.mobile_menu = !this.mobile_menu;
  }
}
