const apiKey = '44776446cc22978e03ce9460';

document.getElementById('convertButton').addEventListener('click', function () {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value; 
    const amount = parseFloat(document.getElementById('amount').value); 
    if (!amount || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.result !== "success") {
                throw new Error('Failed to fetch exchange rate.');
            }
            const rate = data.conversion_rate; 
            const convertedAmount = amount * rate;
            document.getElementById('convertedAmount').value = convertedAmount.toFixed(2);
            document.getElementById('result').innerText = 
                `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
});
