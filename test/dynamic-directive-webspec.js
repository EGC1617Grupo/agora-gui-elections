/* jshint ignore:start */
describe("dynamic-directive tests", function () {



  it("should login as admin", function () {
    browser.get('/admin/login')
    var email = element(by.id('emailText'));
    email.sendKeys('admin@agoravoting.com');
    var pass = element(by.id('passwordText'));
    pass.sendKeys('QWERTY33');
    var button = element(by.css('.btn-success'));
    expect(element(by.css('.btn-success')).isDisplayed()).toBe(true);
    button.click();
    expect(element(by.id('content')).isDisplayed()).toBe(true);
    expect(element(by.css('.input-group .form-control:first-child')).isDisplayed()).toBe(true);
  })

  /*
  //This test works only when the election with id 15 is created and the results of the election have been published
  it("should switch between tabs and check the content is correct", function () {
    browser.get('/election/15/public/home')

    var table = element(by.css('.table'));
    expect(table.isPresent()).toBe(true);
    var chart = element(by.css('.nvd3-svg'));
    expect(chart.isPresent()).toBe(false);

    let list = element.all(by.css('.nav-tabs li'));

    list.get(1).click();
    var table = element(by.css('.table'));
    expect(table.isPresent()).toBe(false);
    var chart = element(by.css('.nvd3-svg'));
    expect(chart.isPresent()).toBe(true);

    list.get(0).click();
    var table = element(by.css('.table'));
    expect(table.isPresent()).toBe(true);
    var chart = element(by.css('.nvd3-svg'));
    expect(chart.isPresent()).toBe(false);
  })
  */

});
/* jshint ignore:end */