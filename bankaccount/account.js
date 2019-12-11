class BankAccount {
    constructor(deposit, balance, amount,withdraw) {
// //         // your code here
        this.deposit =  deposit;
        this.withdraw = withdraw;
        this.amount =amount;
        this.balance = balance;

       
    }

    getBalance() {
        // your code here
        {
            return this.balance  += amount; 
              
            }
    }

    open() {
        // your code here
        if(isActive) {
            return true;
        } else false; 
    }

    deposit() {
        // your code here
        return this.deposit;

    }

    withdraw() {
        // your code here
        return this.withdraw -= amount;

    }

 

    close() {
        if(!active) {
            return true;

        }

        else {
            false;
        }
    }
}
//var myaccount=bankAccount()
const bankAccount=new BankAccount(10000, 4000, 15000, 6000);
    console.log(bankAccount.deposit);
    
