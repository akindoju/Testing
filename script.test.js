const googleSearch = require('./script.js');

dbMock = ['wassup.com', 'whatsapp.com', 'what.com', 'whatIsGood.com'];

it('this is a test', () => {
  expect(googleSearch('what', dbMock).length).toEqual(3);
});
