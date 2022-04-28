const { I } = inject();

module.exports = {
  genderSelect: {css: '#id_gender1'},
  customerFirstNameInput: {css: '#customer_firstname'},
  customerLastNameInput: {css: '#customer_lastname'},
  passwordInput: {css: '#passwd'},
  dayOfBirthSelect: {css: '#days'},
  monthOfBirthSelect: {css: '#months'},
  yearOfBirthSelect: {css: '#years'},
  firstNameInput: {css: '#firstname'},
  lastNameInput: {css: '#lastname'},
  companyInput: {css: '#company'},
  firstAddressLineInput: {css: '#address1'},
  cityInput: {css: '#city'},
  stateSelect: {css: '#id_state'},
  postalCodeInput: {css: '#postcode'},
  homePhoneInput: {css: '#phone'},
  mobilePhoneInput: {css: '#phone_mobile'},
  registerAccountButton: {css: '#submitAccount'},


  fillNewUserForm(user) {
    this.waitForPageLoad();
    I.checkOption(this.genderSelect, user.gender);
    I.fillField(this.customerFirstNameInput, user.customerFirstName);
    I.fillField(this.customerLastNameInput, user.customerLastName);
    I.fillField(this.passwordInput, user.password);

    I.click(this.dayOfBirthSelect);
    I.selectOption(this.dayOfBirthSelect, user.dayOfBirth);
    I.click(this.monthOfBirthSelect);
    I.selectOption(this.monthOfBirthSelect, user.monthOfBirth);
    I.click(this.yearOfBirthSelect);
    I.selectOption(this.yearOfBirthSelect, user.yearOfBirth);

    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.companyInput, user.company);
    I.fillField(this.firstAddressLineInput, user.firstAddressLine);
    I.fillField(this.cityInput, user.city);
    I.click(this.stateSelect);
    I.selectOption(this.stateSelect, user.state);
    I.fillField(this.postalCodeInput, user.postalCode);
    I.fillField(this.homePhoneInput, user.homePhone);
    I.fillField(this.mobilePhoneInput, user.mobilePhone);
  },

  waitForPageLoad() {
    I.waitForVisible(this.customerFirstNameInput);
  },
  
  clickRegisterAccount() {
    I.click(this.registerAccountButton);
  }

}
