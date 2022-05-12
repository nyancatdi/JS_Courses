const { I } = inject();

module.exports = {
  shippingPrice: { css: '#total_shipping' },
  taxPrice: { css: '#total_tax' },
  totalPrice: { css: '#total_price' },
  proceedButton: { css: 'a[title="Proceed to checkout"]' },
  submitButton: { css: 'button[name="processAddress"]' },
  agreeCheckbox: { css: '#cgv' },
  processCarrierButton: { css: 'button[name="processCarrier"]' },
  paymentButton: { css: 'a.bankwire' },
  confirmOrderButton: { css: '#cart_navigation > button[type="submit"]' },

  comparePrices({ shownPriceValue, shippingPriceValue, taxPriceValue, totalPriceValue }) {
    const convertPriceToNumber = (stringValue) => +stringValue.split('$')[1];
    const shownPriceNumber = convertPriceToNumber(shownPriceValue);
    const shownShippingNumber = convertPriceToNumber(shippingPriceValue);
    const shownTaxNumber = convertPriceToNumber(taxPriceValue);
    let priceToCompare = `$${shownPriceNumber + shownShippingNumber + shownTaxNumber}`;
    I.assertEqual(priceToCompare, totalPriceValue);
  },

  async getShippingPrice() {
    return await I.grabTextFrom(this.shippingPrice);
  },

  async getTaxPrice() {
    return await I.grabTextFrom(this.taxPrice);
  },

  async getTotalPrice() {
    return await I.grabTextFrom(this.totalPrice);
  },

  clickProceedButton() {
    I.click(this.proceedButton);
  },

  clickSubmitButton() {
    I.waitForVisible(this.submitButton);
    I.click(this.submitButton);
  },

  checkAgreeCheckbox() {
    I.waitForVisible(this.agreeCheckbox);
    I.checkOption(this.agreeCheckbox);
  },

  clickProcessCarrierButton() {
    I.click(this.processCarrierButton);
  },

  clickPaymentButton() {
    I.click(this.paymentButton);
  },

  clickConfirmOrderButton() {
    I.waitForVisible(this.confirmOrderButton);
    I.click(this.confirmOrderButton);
  },

  checkConfirmPage() {
    I.see('Your order on My Store is complete.');
  }
}
