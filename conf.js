exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub' || 'http://selenium.docker:4444/wd/hub',
    specs: ['todo-spec.js']
};