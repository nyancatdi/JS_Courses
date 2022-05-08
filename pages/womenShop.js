const { I } = inject();

module.exports = {
  productCard: { text: 'Faded Short Sleeve T-shirts'},

  waitForPageLoad() {
    I.waitForVisible(this.productCard);
  },

  clickProductCard() {
    this.waitForPageLoad();
    I.click(this.productCard);
  },

}
