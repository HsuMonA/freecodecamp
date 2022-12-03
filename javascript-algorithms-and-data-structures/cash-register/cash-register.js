function checkCashRegister(price, cash, cid) {
  let copyCid = cid.map((element) => [...element]); //create a copy which copies all nested arrays in the cid
  let reversedCid = copyCid.reverse();
  let cashback = cash - price;
  let result = {
    status: "OPEN",
    change: [
      ["ONE HUNDRED", 0],
      ["TWENTY", 0],
      ["TEN", 0],
      ["FIVE", 0],
      ["ONE", 0],
      ["QUARTER", 0],
      ["DIME", 0],
      ["NICKEL", 0],
      ["PENNY", 0],
    ],
  };

  while (cashback > 0) {
    if (cashback >= 100 && reversedCid[0][1] >= 100) {
      cashback = (cashback - 100).toFixed(2);
      reversedCid[0][1] = (reversedCid[0][1] - 100).toFixed(2); //toFixed(2) returns two decimal with type string
      result.change[0][1] = Math.round((result.change[0][1] + 100) * 100) / 100; //Math.round returns two decimal with type float
    } else if (cashback >= 20 && reversedCid[1][1] >= 20) {
      cashback = (cashback - 20).toFixed(2);
      reversedCid[1][1] = (reversedCid[1][1] - 20).toFixed(2);
      result.change[1][1] = Math.round((result.change[1][1] + 20) * 100) / 100;
    } else if (cashback >= 10 && reversedCid[2][1] >= 10) {
      cashback = (cashback - 10).toFixed(2);
      reversedCid[2][1] = (reversedCid[2][1] - 10).toFixed(2);
      result.change[2][1] = Math.round((result.change[2][1] + 10) * 100) / 100;
    } else if (cashback >= 5 && reversedCid[3][1] >= 5) {
      cashback = (cashback - 5).toFixed(2);
      reversedCid[3][1] = (reversedCid[3][1] - 5).toFixed(2);
      result.change[3][1] = Math.round((result.change[3][1] + 5) * 100) / 100;
    } else if (cashback >= 1 && reversedCid[4][1] >= 1) {
      cashback = (cashback - 1).toFixed(2);
      reversedCid[4][1] = (reversedCid[4][1] - 1).toFixed(2);
      result.change[4][1] = Math.round((result.change[4][1] + 1) * 100) / 100;
    } else if (cashback >= 0.25 && reversedCid[5][1] >= 0.25) {
      cashback = (cashback - 0.25).toFixed(2);
      reversedCid[5][1] = (reversedCid[5][1] - 0.25).toFixed(2);
      result.change[5][1] =
        Math.round((result.change[5][1] + 0.25) * 100) / 100;
    } else if (cashback >= 0.1 && reversedCid[6][1] >= 0.1) {
      cashback = (cashback - 0.1).toFixed(2);
      reversedCid[6][1] = (reversedCid[6][1] - 0.1).toFixed(2);
      result.change[6][1] = Math.round((result.change[6][1] + 0.1) * 100) / 100;
    } else if (cashback >= 0.05 && reversedCid[7][1] >= 0.05) {
      cashback = (cashback - 0.05).toFixed(2);
      reversedCid[7][1] = (reversedCid[7][1] - 0.05).toFixed(2);
      result.change[7][1] =
        Math.round((result.change[7][1] + 0.05) * 100) / 100;
    } else if (cashback >= 0.01 && reversedCid[8][1] >= 0.01) {
      cashback = (cashback - 0.01).toFixed(2);
      reversedCid[8][1] = (reversedCid[8][1] - 0.01).toFixed(2);
      result.change[8][1] =
        Math.round((result.change[8][1] + 0.01) * 100) / 100;
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] }; //all currencies don't have enough fund
    }
  }

  result.change = result.change.filter((element) => element[1] > 0);

  let changeDue = reversedCid.some((element) => element[1] > 0);

  if (changeDue === true) {
    return result;
  } else {
    return { status: "CLOSED", change: cid };
  }
}
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
