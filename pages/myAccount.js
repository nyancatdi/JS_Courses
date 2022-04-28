const { I } = inject();

module.exports = {

  checkAccountPage () {
    I.amOnPage ('http://automationpractice.com/index.php?controller=my-account');
    I.see ('My account');
  }


}
