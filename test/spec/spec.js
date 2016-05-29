var app = require('../js/script.js');

describe("app", function() {
  it("should call pow", function() {

  	//prepare
  	var result;
  	//act
  	result = app.pow(4, 2);
  	//assert
    expect(result).toBe(16);
  });

  it("should call pow", function() {

  	//prepare
  	var result;
  	//act
  	result = app.pow('string', 3);
  	//assert
    expect(result).toBe('Некорректные данные');
  });

  it("should call logIn", function() {

  	//prepare
  	var result;
  	//act
  	result = app.logIn(['Kathy', 'Elisa',  'Julia', 'Angelina', 'Mindi'], 'Julia');
  	//assert
    expect(result).toBe('Julia,ты успешно вошел!');
  });

  it("should call logIn", function() {

  	//prepare
  	var result;
  	//act
  	result = app.logIn(['Kathy', 'Elisa',  'Julia', 'Angelina', 'Mindi'], 'Amanda');
  	//assert
    expect(result).toBe('Ошибка - таких имен нет');
  });
});