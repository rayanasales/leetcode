var lemonadeChange = function (bills) {
  let fiveDollars = 0,
    tenDollars = 0; // Track `$5` and `$10` bills

  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i];

    // Customer pays with a `$5` bill
    if (bill === 5) {
      fiveDollars++; // Increase `$5` bill counter
    }
    // Customer pays with a `$10` bill
    else if (bill === 10) {
      if (fiveDollars === 0) return false; // Can't give change if no `$5` bills
      fiveDollars--; // Give a `$5` bill as change
      tenDollars++; // Increase `$10` bill counter
    }
    // Customer pays with a `$20` bill
    else if (bill === 20) {
      // Prefer to give one `$10` and one `$5` as change if possible
      if (tenDollars > 0 && fiveDollars > 0) {
        tenDollars--;
        fiveDollars--;
      }
      // Otherwise, give three `$5` bills as change
      else if (fiveDollars >= 3) {
        fiveDollars -= 3;
      } else {
        return false; // Can't give change
      }
    }
  }
  return true; // Successfully provided change to all customers
};
