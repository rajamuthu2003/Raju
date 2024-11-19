
    // const payButton = document.querySelector('button:nth-of-type(1)');
    // const loanButton = document.querySelector('button:nth-of-type(1)');
    // const checkButton = document.querySelector('button:nth-of-type(1)');
     
    // let payAmount = 1000; // Example amount
    // let loanAmount = 200; // Example amount
    // let accountBalance = 500; // Example balance

    // document.getElementById('pay').innerText = payAmount;
    // document.getElementById('loan').innerText = loanAmount;
    // document.getElementById('balance').innerText = accountBalance;
    

    // payButton.addEventListener('click', () => {
    //     accountBalance += payAmount;
    //     document.getElementById("emptybox").innerHTML = payAmount
    // });


    // loanButton.addEventListener('click', () => {
    //     accountBalance -= loanAmount;
    //     alert(`Took loan of ${loanAmount}. New balance: ${accountBalance}`);
    // });
    

    // checkButton.addEventListener('click', () => {
    //      alert(`Your account balance is: ${accountBalance}`);
    // });


    const payButton = document.getElementById('payButton');
    const loanButton = document.getElementById('loanButton');
    const checkButton = document.getElementById('checkButton');

    let accountBalance = 500; // Initial balance

    document.getElementById('balance').innerText = accountBalance;

    payButton.addEventListener('click', () => {
        const payAmount = parseFloat(document.getElementById('payInput').value);
        if (!isNaN(payAmount) && payAmount > 0) {
            accountBalance -= payAmount;
            alert(`Paid ${payAmount}. New balance: ${accountBalance}`);
            document.getElementById('balance').innerText = accountBalance;
            document.getElementById('payInput').value = ''; // Clear input
        } else {
            alert('Please enter a valid amount to pay.');
        }
    });

    loanButton.addEventListener('click', () => {
        const loanAmount = parseFloat(document.getElementById('loanInput').value);
        if (!isNaN(loanAmount) && loanAmount > 0) {
            accountBalance += loanAmount;
            alert(`Took loan of ${loanAmount}. New balance: ${accountBalance}`);
            document.getElementById('balance').innerText = accountBalance;
            document.getElementById('loanInput').value = ''; // Clear input
        } else {
            alert('Please enter a valid amount for the loan.');
        }
    });

    checkButton.addEventListener('click', () => {
        alert(`Your account balance is: ${accountBalance}`);
    });