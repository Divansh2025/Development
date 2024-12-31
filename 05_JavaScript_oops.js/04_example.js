// good implementation of oops:
class BankAccount {
  #balance = 0;

  constructor(initialBalance = 0) {
    if (typeof initialBalance !== "number" || initialBalance < 0) {
      throw new Error("Initial balance must be a non-negative number.");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Deposit amount must be a positive number.");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Withdrawal amount must be a positive number.");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient balance.");
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

// Example usage:
try {
  const myAccount = new BankAccount(100);
  let testamount = 50;
  let testwithdraw = 50;
  console.log("Initial Balance:", myAccount.getBalance());
  myAccount.deposit(testamount);
  console.log(`After Deposit of amount:${testamount}`, myAccount.getBalance());
  myAccount.withdraw(testwithdraw);
  console.log(
    `After Withdrawal of amount:${testwithdraw}`,
    myAccount.getBalance()
  );
} catch (error) {
  console.error(error.message);
}
