exports.config = {
    seleniumAddress: process.env.SELENIUM_ADDRESS || 'http://selenium.docker:4444/wd/hub',
    specs: ['todo-spec.js']
};
console.log("Selenium Address: ", process.env.SELENIUM_ADDRESS);