const { I } = inject();

module.exports = {
  newUserEmailInput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },
  loginEmailInput: { css: '#email' },
  loginPassInput: { css: '#passwd' },
  signInButton: { css: '#SubmitLogin' },

  waitForRegisterLoad() {
    I.waitForVisible(this.newUserEmailInput);
  },

  waitForSignInLoad() {
    I.waitForVisible(this.loginEmailInput);
  },

  fillNewUserEmail(email) {
    this.waitForRegisterLoad();
    I.fillField(this.newUserEmailInput, email);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  fillLoginForm(email, pass) {
    this.waitForSignInLoad();
    I.fillField(this.loginEmailInput, email);
    I.fillField(this.loginPassInput, pass);
  },

  clickSignIn() {
    I.click(this.signInButton);
  }
}
