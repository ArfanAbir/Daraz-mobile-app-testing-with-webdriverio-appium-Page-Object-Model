var expect = require('chai').expect;
var wd = require('wd'),
    driver = wd.promiseChainRemote({
        host: 'localhost',
        port: 4723
    });

const desiredCaps = {
  platformName: 'Android',
  platformVersion: '12.0',
  deviceName: 'emulator-5554',
  app:"E:\\apk\\Daraz Online Shopping.apk"
}


describe('Daraz Mobile Android ', function () {

    before(function () {
        this.timeout(300 * 1000);
        return driver.init(desiredCaps);
    });

    after(function () {
        console.log("quitting");
    });
    it('Changing App Country and Changing Language', async function () {
        this.timeout(300 * 1000);
            const element = await driver.elementByXPath("//android.widget.TextView[@text='Bangladesh']");
            expect(element).to.exist;
            element.click();
            await new Promise(res => setTimeout(res, 1000));
    });

});
