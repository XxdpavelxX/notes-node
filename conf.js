var username = "dredbound";
var accessKey = "f4536fc1-a1f5-4b55-9519-23facc376d53";

exports.config = {
    // seleniumAddress: 'http://selenium.docker:4444/wd/hub',
    seleniumAddress: "http://" + username + ":"+ accessKey+"@ondemand.saucelabs.com:80/wd/hub",
    specs: ['todo-spec.js']
};
if (process.env.TRAVIS) {
    exports.config.sauceUser = process.env.SAUCE_USERNAME;
    exports.config.sauceKey = process.env.SAUCE_ACCESS_KEY;
    exports.config.capabilities = {
        'browserName': 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER
    };
}
