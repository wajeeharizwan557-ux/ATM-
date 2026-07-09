let balance = 50000;
let pinAttempts = 0;
const maxAttempts = 3;
const correctPin = 1234;
let isPinVerified = false;

while (pinAttempts < maxAttempts) {
    let enteredPin = Number(prompt("Enter your 4-digit PIN:"));

    if (enteredPin === correctPin) {
        isPinVerified = true;
        break; 
    } else {
        pinAttempts++;
        let remainingAttempts = maxAttempts - pinAttempts;
        
        if (remainingAttempts > 0) {
            alert(`Invalid PIN. Access Denied. You have ${remainingAttempts} attempts left.`);
        } else {
            alert("ATM Blocked"); 
        }
    }
}

if (isPinVerified) {
    let keepRunning = true;

    while (keepRunning) {
        let choice = Number(prompt(
            "--- ATM Menu ---\n" +
            "1. Cash Withdraw\n" +
            "2. Cash Deposit\n" +
            "3. Balance Inquiry\n" +
            "4. Exit\n" +
            "Choose an option (1-4):"
        ));

        switch (choice) {
            case 1:
                let withdrawAmount = Number(prompt("Enter the amount to withdraw:"));
                if (withdrawAmount <= 0) {
                    alert("Invalid amount. Please enter a value greater than zero.");
                } else if (withdrawAmount > balance) {
                    alert("Insufficient Balance");
                } else {
                    balance -= withdrawAmount;
                    alert(`Withdrawal successful! Remaining Balance: ${balance}`);
                }
                break;

            case 2:
                let depositAmount = Number(prompt("Enter the amount to deposit:"));
                if (depositAmount <= 0) {
                    alert("Invalid amount. Please enter a value greater than zero.");
                } else {
                    balance += depositAmount;
                    alert(`Deposit successful! Updated Balance: ${balance}`);
                }
                break;

            case 3:
                alert(`Your current balance is: ${balance}`);
                break;

            case 4:
                alert("Thank you for using this ATM.");
                keepRunning = false; 
                break;

            default:
                alert("Invalid Option");
                break;
        }
    }
}