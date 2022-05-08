/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type myAccountPage = typeof import('./pages/myAccount.js');
type userData = typeof import('./data/user.js');
type womenShopPage = typeof import('./pages/womenShop.js');
type productCardPage = typeof import('./pages/productCard.js');
type summaryPage = typeof import('./pages/summary.js');
type ChaiWrapper = import('codeceptjs-chai');
type Generator = import('./generator_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authPage: authPage, createAccountPage: createAccountPage, myAccountPage: myAccountPage, userData: userData, womenShopPage: womenShopPage, productCardPage: productCardPage, summaryPage: summaryPage }
  interface Methods extends Playwright, ChaiWrapper, Generator {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper>, WithTranslation<Generator> {}
  namespace Translation {
    interface Actions {}
  }
}
