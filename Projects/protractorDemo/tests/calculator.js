describe('Protractor Demo Application', function() {
 it('should multiply two integers', function() {
 browser.get('http://juliemr.github.io/protractor-demo/');
 let f = element(by.model('first'));
 f.click();
 f.sendKeys(2);
 var s = element(by.model('second'));
 s.click();
 s.sendKeys(7);
 element(by.model('operator')).click();
 element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
 element(by.id('gobutton')).click();
 expect(element(by.binding('latest')).getText()).toEqual('14'); //Correct expectation
 });
});