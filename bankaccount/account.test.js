const bankAccount = require('./bankAccount');

test('Bank account has amount, balance, withdraw and deposit',() =>{
    expect(bankAccount('string')).toBe('invalid input');
});
   
test('it provides the values for the new constructor',() =>{
expect(
    bankAccount(balance, amount,withdraw,deposit)
).toEqual(
    {'balance':10000,'amout':15000,'withdraw':4000,'deposit':5000}
);

});
test('if active then open',() =>{
    expect(bankAccount(isActive),toEqual('True'))
});
test('if is not active then close',() =>{
    expect(bankAccount(!isActive),toEqual('False'))
});
   
   