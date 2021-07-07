describe('Supercalculator demo', function() {
    //let url="https://juliemr.github.io/protractor-demo/"
    let fNum = element(by.model('first'));
    let sNum = element(by.model('second'));
    let go = element(by.id('gobutton'));
    let result= element(by.css('h2.ng-binding'));
    var history = element.all(by.repeater('result in memory'));
    
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(20000)

      });
      function add(a, b) {
        fNum.click();
        fNum.sendKeys(a);
        sNum.click();
        sNum.sendKeys(b);
        goButton.click();
        
      }
      it(' history', function() {
        add(12, 2);
        add(32, 9);
    
        expect(history.count()).toEqual(2);
      });
      
      browser.sleep(2000)

});
