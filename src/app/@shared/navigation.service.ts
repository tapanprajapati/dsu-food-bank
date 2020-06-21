import { Injectable } from '@angular/core';
import { NavItemModel } from '@core/model/nav-item.model';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  getPrimaryNavigationItems(): NavItemModel[] {
    return [
      { name: 'Home', routeLink: '/home' },
      { name: 'Donate', routeLink: '/donate' },
      { name: 'Products', routeLink: '/products' },
      { name: 'Contact Us', routeLink: '/contact' },
      { name: 'About Us', routeLink: '/about' },
    ];
  }

  getSecondaryNavigationItems(): NavItemModel[] {
    return [
      { name: 'Login', routeLink: '/login', isAuthenticationRequired: false },
      { name: 'Sign Up', routeLink: '/signup', isAuthenticationRequired: false },
      { name: 'Orders', routeLink: '/orders', isAuthenticationRequired: true },
      { name: 'Profile', routeLink: '/profile', isAuthenticationRequired: true },
      { name: 'Cart', routeLink: '/cart', isAuthenticationRequired: true, isIcon: true, iconName: faShoppingCart },
    ];
  }

  getTernaryNavigationItems(): NavItemModel[] {
    return [
      { name: 'Terms & Condition', routeLink: '/policy/terms', isAuthenticationRequired: false },
      { name: 'Privacy Policy', routeLink: '/policy/privacy', isAuthenticationRequired: false },
    ];
  }

  getSocialNavigationItems(): NavItemModel[] {
    return [
      {
        name: 'Facebook',
        routeLink: 'https://www.facebook.com/dalstudentunion',
        isIcon: true,
        iconName: faFacebook,
      },
      {
        name: 'Twitter',
        routeLink: 'https://twitter.com/DalStudentUnion',
        isIcon: true,
        iconName: faTwitter,
      },
      {
        name: 'Instagram',
        routeLink: 'https://www.instagram.com/dalstudentunion/',
        isIcon: true,
        iconName: faInstagram,
      },
    ];
  }
}
