const FileHandler = require("./helpers/file_handler");

Feature('Store');

Before(({ I, homePage }) => {
    homePage.openStore();
});

Scenario('registration test', ({ I, homePage, authPage, createAccountPage, myAccountPage, userData }) => {
    userData.email = Date.now() + '@test.com';
    homePage.clickSignIn();
    authPage.fillNewUserEmail(userData.email);
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(userData);
    createAccountPage.clickRegisterAccount();
    myAccountPage.checkAccountPage();
}).tag('@reg');

Scenario('order test', async ({ I, userData, homePage, authPage, myAccountPage, womenShopPage, productCardPage, summaryPage }) => {
    homePage.clickSignIn();
    authPage.fillLoginForm(userData.email, userData.password);
    authPage.clickSignIn();
    myAccountPage.checkAccountPage();
    homePage.clickWomenCategoryButton();
    womenShopPage.clickProductCard();
    productCardPage.checkProductCardPage();
    const shownPriceValue = await productCardPage.getProductPrice();
    productCardPage.clickAddToCart();
    productCardPage.clickProceedButton();
    const shippingPriceValue = await summaryPage.getShippingPrice();
    const taxPriceValue = await summaryPage.getTaxPrice();
    const totalPriceValue = await summaryPage.getTotalPrice();
    summaryPage.comparePrices(shownPriceValue, shippingPriceValue, taxPriceValue, totalPriceValue);
    summaryPage.clickProceedButton();
    summaryPage.clickSubmitButton();
    summaryPage.checkAgreeCheckbox();
    summaryPage.clickProcessCarrierButton();
    summaryPage.clickPaymentButton();
    summaryPage.clickConfirmOrderButton();
    summaryPage.checkConfirmPage();
}).tag('@order');

Data(FileHandler.getData()).Scenario('Users from data', ({ current }) => {
    console.log('Email: ' + current.email + '\nPassword: ' + current.password);
}).tag('@account');