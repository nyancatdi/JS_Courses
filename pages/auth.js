const { I } = inject();

module.exports = {
  newUserEmailImput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },

  waitForPageLoad() {
    I.waitForVisible(this.newUserEmailImput);
  },


  fillNewUserEmail(email) {
    this.waitForPageLoad();
    I.fillField(this.newUserEmailImput, email);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  }
}
