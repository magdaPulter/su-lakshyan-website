import { NgcCookieConsentConfig } from 'ngx-cookieconsent';

export const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'https://su-lakshyan-website.web.app',
  },
  position: 'bottom-right',
  theme: 'classic',
  palette: {
    popup: {
      background: '#002902',
      text: '#d7e9d8',
      link: '#ffffff',
    },
    button: {
      background: '#e8d5e0',
      text: '#002902',
      border: 'transparent',
    },
  },
  type: 'info',
  content: {
    message:
      'This website uses cookies to ensure you get the best experience on our website.',
    dismiss: 'Got it!',
    deny: 'Refuse cookies',
    link: 'Learn more',
    href: 'https://cookiesandyou.com',
    policy: 'Cookie Policy',
  },
};
