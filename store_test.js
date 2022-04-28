Feature('Store');

Before(({ I, homePage }) => {
    homePage.openStore();
});

Scenario('test something', async ({ I, homePage, authPage, createAccountPage, myAccountPage, userData }) => {
    let randomEmail = Date.now() + '@test.com';
    console.log('##generated email', randomEmail);
    homePage.clickSignIn();
    authPage.fillNewUserEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(userData);
    createAccountPage.clickRegisterAccount();
    myAccountPage.checkAccountPage();
});