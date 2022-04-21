// ************** Common Input Function part **************
function getInputValue(inputId) {
    const inputFieldText = document.getElementById(inputId);
    const inputAmount = parseFloat(inputFieldText.value);
    // **** cleare the input field ****
    inputFieldText.value = '';

    return inputAmount;
}

// ********** Updating the Deposite and Withdraw Total ***********

function updateDW(fieldIdDW, inputAmountDW) {
    // debugger
    const fieldValueTextDW = document.getElementById(fieldIdDW);
    const fieldValueDW = parseFloat(fieldValueTextDW.innerText);
    // to get input tag value we use '.value' and to get other tag value we use '.innerText' 
    fieldValueTextDW.innerText = fieldValueDW + inputAmountDW;
}

// ************ Updating the Balance Total ************
function updateBalance(depositOrWithdrawAmount, isAdd) {
    const balanceFieldText = document.getElementById('total-balance');
    const balanceFieldValue = parseFloat(balanceFieldText.innerText);

    if (isAdd == true) {
        balanceFieldText.innerText = balanceFieldValue + depositOrWithdrawAmount;
    }
    else
        balanceFieldText.innerText = balanceFieldValue - depositOrWithdrawAmount;
}

// ****************** Deposit updation part *****************

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputAmount = getInputValue('input-deposit');
    if (depositInputAmount > 0) {
        updateDW('total-deposit', depositInputAmount);
        updateBalance(depositInputAmount, true);
    }
});

// ****************** Withdrawal updation part *****************

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputAmount = getInputValue('input-withdraw');
    if (withdrawInputAmount > 0 &&
        withdrawInputAmount <= parseFloat(document.getElementById('total-balance').innerText)) {
        updateDW('total-withdraw', withdrawInputAmount);
        updateBalance(withdrawInputAmount, false);
    }
});