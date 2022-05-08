const { I } = inject();

module.exports = {
  storeLink: 'http://automationpractice.com/index.php',
  signInButton: { css: 'a.login' },
  womenCategoryButton: { css: 'a[title="Women"]'},

  openStore() {
    I.amOnPage(this.storeLink);
  },

  clickSignIn() {
    I.waitForVisible(this.signInButton);
    I.click(this.signInButton);
  },

  clickWomenCategoryButton() {
    I.click(this.womenCategoryButton);
  }
}
