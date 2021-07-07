describe('Protractor Demo App', function() {
    let url="http://juliemr.github.io/protractor-demo/"
    var fnum = element(by.model('first'))
    var snum = element(by.model('second'))
    var goButton = element(by.id('gobutton'));
    var result = element(by.binding('latest'));
    var opr=element(by.model('operator'));
    var history = element.all(by.repeater('result in memory'));
  
    function add(a, b) {
      fnum.click();
      fnum.sendKeys(a);
      snum.click();
      snum.sendKeys(b);
      goButton.click();
    }
    function mul(c, d) {
        fnum.click();
        fnum.sendKeys(c);
        snum.click();
        snum.sendKeys(d);
        opr.click();
        element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
        goButton.click();
      }
      function div(c, d) {
        fnum.click();
        fnum.sendKeys(c);
        snum.click();
        snum.sendKeys(d);
        opr.click();
        element(by.xpath(".//option[@value= 'DIVISION']")).click();
        goButton.click();
      }
      function sub(c, d) {
        fnum.click();
        fnum.sendKeys(c);
        snum.click();
        snum.sendKeys(d);
        opr.click();
        element(by.xpath(".//option[@value= 'SUBTRACTION']")).click();
        goButton.click();
      }
      function mod(c, d) {
        fnum.click();
        fnum.sendKeys(c);
        snum.click();
        snum.sendKeys(d);
        opr.click();
        element(by.xpath(".//option[@value= 'MODULO']")).click();
        goButton.click();
      }

  
    beforeEach(function() {
      browser.get(url);
    });
  
    it('adittion and history validation', function() {
      add(3, 7);
      add(7, 10);
  
      expect(history.count()).toEqual(2);
  
      
    });
    it('mul and history validation', function() {
        mul(3, 7);
        mul(7, 10);
    
        expect(history.count()).toEqual(2);
    
        
      });
      it('division and history validation', function() {
        div(10, 2);
        div(35, 7);
    
        expect(history.count()).toEqual(2);
      });
      it('substraction and history validation', function() {
        sub(10, 2);
        sub(35, 7);
    
        expect(history.count()).toEqual(2);
      });
      it('modulo and history validation', function() {
        mod(10, 2);
        mod(35, 7);
    
        expect(history.count()).toEqual(2);
      });

  });