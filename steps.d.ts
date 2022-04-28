/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type myAccountPage = typeof import('./pages/myAccount.js');
type userData = typeof import('./data/user.js');
type Generator = import('./generator_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authPage: authPage, createAccountPage: createAccountPage, myAccountPage: myAccountPage, userData: userData }
  interface Methods extends Playwright, Generator {}
  interface I extends ReturnType<steps_file>, WithTranslation<Generator> {}
  namespace Translation {
    interface Actions {}
  }
}
