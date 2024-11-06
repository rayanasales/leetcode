var maximumWealth = function (accounts) {
  let highestWealth = 0;
  for (let customer = 0; customer < accounts.length; customer++) {
    let customerAccount = accounts[customer];
    let customerWealth = 0;
    for (let bank = 0; bank < customerAccount.length; bank++)
      customerWealth += customerAccount[bank];
    highestWealth =
      customerWealth > highestWealth ? customerWealth : highestWealth;
  }
  return highestWealth;
};
