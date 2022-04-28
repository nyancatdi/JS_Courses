let user = {
    gender: {css: '#id_gender1'},
    customerFirstName: 'Jon',
    customerLastName: 'Snow',
    password: 'ghost123',
    dayOfBirth: '1',
    monthOfBirth: '1',
    yearOfBirth: '2000',
    firstName: 'Jon',
    lastName: 'Snow',
    company: 'Night Watch',
    firstAddressLine: '1285 Carmichael Way',
    city: 'Montgomery',
    state: 'Alabama',
    postalCode: '36106',
    homePhone: '1111-1111',
    mobilePhone: '+1 (205) 555-3890',
}

Feature('Store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    createAccountPage.clickRegisterAccount();
    myAccountPage.checkAccountPage();
    pause();
});