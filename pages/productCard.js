const { I } = inject();

module.exports = {
  productPrice: { css: '#our_price_display'},
  addToCartButton: { css: '#add_to_cart' },
  proceedButton: { css: 'a[title="Proceed to checkout"]'},

  checkProductCardPage() {
    I.amOnPage('http://automationpractice.com/index.php?id_product=1&controller=product');
  },

  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
  },

  clickAddToCart() {
    I.click(this.addToCartButton);
  },

  clickProceedButton() {
    I.click(this.proceedButton);
  },
}
