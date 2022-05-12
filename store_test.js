const FileHandler = require("./helpers/file_handler");

Feature('Store');

// Before(({ I, homePage }) => {
//     homePage.openStore();
// });

Scenario('registration test', async ({ I, homePage, authPage, createAccountPage, myAccountPage, userData }) => {
    userData.email = await I.getRandomEmail();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(userData.email);
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(userData);
    createAccountPage.clickRegisterAccount();
    myAccountPage.checkAccountPage();
}).tag('@reg');

Scenario('order test', async ({ I, userData, homePage, authPage, myAccountPage, womenShopPage, productCardPage, summaryPage }) => {
    const pricesValues = {
        shownPriceValue: 0, 
        shippingPriceValue: 0, 
        taxPriceValue: 0, 
        totalPriceValue: 0
    };
    homePage.clickSignIn();
    authPage.fillLoginForm(userData.email, userData.password);
    authPage.clickSignIn();
    myAccountPage.checkAccountPage();
    homePage.clickWomenCategoryButton();
    womenShopPage.clickProductCard();
    productCardPage.checkProductCardPage();
    pricesValues.shownPriceValue = await productCardPage.getProductPrice();
    productCardPage.clickAddToCart();
    productCardPage.clickProceedButton();
    pricesValues.shippingPriceValue = await summaryPage.getShippingPrice();
    pricesValues.taxPriceValue = await summaryPage.getTaxPrice();
    pricesValues.totalPriceValue = await summaryPage.getTotalPrice();
    summaryPage.comparePrices(pricesValues);
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

Scenario('api', async ({ I }) => {
    let getResponse = await I.sendGetRequest('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    console.log(getResponse.data);
}).tag('@api');