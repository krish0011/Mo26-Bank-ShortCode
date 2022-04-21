// ****************** Deposit updation part *****************

document.getElementById('deposit-button').addEventListener('click', function () {
    // **** Updating the Deposite Total ****
    const inputDeposit = document.getElementById('input-deposit');
    const newDepositAmount = inputDeposit.value;

    const depositTotal = document.getElementById('total-deposit');
    const previousDepositAmount = depositTotal.innerText;

    // to get input tag value we use '.value' and to get other tag value we use '.innerText' 
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    // **** Updating the Balance Total ****
    const totalBalance = document.getElementById('total-balance');
    const newTotalBalanceAmount = totalBalance.innerText;

    const newTotalBalance = parseFloat(newTotalBalanceAmount) + parseFloat(newDepositAmount);
    totalBalance.innerText = newTotalBalance;

    // **** cleare the deposit input field ****
    inputDeposit.value = '';
});

// ****************** Withdrawal updation part *****************

document.getElementById('withdraw-button').addEventListener('click', function () {
    // **** Updating the Withdraw Total ****
    const inputWithdraw = document.getElementById('input-withdraw');
    const newWithdrawAmount = inputWithdraw.value;

    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawAmount = withdrawTotal.innerText;

    // to get input tag value we use '.value' and to get other tag value we use '.innerText' 
    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);

    withdrawTotal.innerText = newWithdrawTotal;

    // **** Updating the Balance Total ****
    const totalBalanceWD = document.getElementById('total-balance');
    const newTotalBalanceAmountWD = totalBalanceWD.innerText;

    const newTotalBalanceWD = parseFloat(newTotalBalanceAmountWD) - parseFloat(newWithdrawAmount);
    totalBalanceWD.innerText = newTotalBalanceWD;

    // **** cleare the withdraw input field ****
    inputWithdraw.value = '';
});