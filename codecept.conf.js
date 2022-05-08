const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle0',
      waitForTimeout: 40000,
      timeout: 40000,
    },
    ChaiWrapper : {
      require: "codeceptjs-chai"
    },
    Generator: {
      require: './generator_helper.js',
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
    myAccountPage: './pages/myAccount.js',
    userData: './data/user.js',
    womenShopPage: './pages/womenShop.js',
    productCardPage: './pages/productCard.js',
    summaryPage: './pages/summary.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'JS_Courses',
  plugins: {
    tryTo: {
      enabled: true
    }
  }
}