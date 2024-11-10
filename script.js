// أسعار الصرف المباشرة
const exchangeRates = {
    "AED": { "USD": 0.27, "SYP": 730.00, "EUR": 0.24, "GBP": 0.21, "JPY": 30.25, "CAD": 0.36, "AUD": 0.38, "CHF": 0.25, "CNY": 1.9 },
    "USD": { "AED": 3.67, "SYP": 2700.00, "EUR": 0.88, "GBP": 0.77, "JPY": 110.25, "CAD": 1.36, "AUD": 1.4, "CHF": 0.91, "CNY": 7.1 },
    "SYP": { "AED": 0.0014, "USD": 0.00037, "EUR": 0.00033, "GBP": 0.00028, "JPY": 0.041, "CAD": 0.0005, "AUD": 0.00052, "CHF": 0.00034, "CNY": 0.0026 },
    "EUR": { "AED": 4.1, "USD": 1.14, "SYP": 3000.00, "GBP": 0.87, "JPY": 125.3, "CAD": 1.55, "AUD": 1.6, "CHF": 1.04, "CNY": 8.1 },
    "GBP": { "AED": 4.8, "USD": 1.3, "SYP": 3400.00, "EUR": 1.15, "JPY": 140.2, "CAD": 1.8, "AUD": 1.9, "CHF": 1.2, "CNY": 9.2 },
    "JPY": { "AED": 0.033, "USD": 0.009, "SYP": 25.00, "EUR": 0.008, "GBP": 0.007, "CAD": 0.013, "AUD": 0.014, "CHF": 0.008, "CNY": 0.065 },
    "CAD": { "AED": 2.75, "USD": 0.74, "SYP": 2000.00, "EUR": 0.65, "GBP": 0.56, "JPY": 80.00, "AUD": 1.03, "CHF": 0.67, "CNY": 5.3 },
    "AUD": { "AED": 2.6, "USD": 0.71, "SYP": 1900.00, "EUR": 0.63, "GBP": 0.54, "JPY": 78.5, "CAD": 0.97, "CHF": 0.65, "CNY": 5.1 },
    "CHF": { "AED": 3.6, "USD": 1.1, "SYP": 2800.00, "EUR": 0.96, "GBP": 0.83, "JPY": 130.0, "CAD": 1.5, "AUD": 1.54, "CNY": 7.8 },
    "CNY": { "AED": 0.53, "USD": 0.14, "SYP": 350.00, "EUR": 0.12, "GBP": 0.11, "JPY": 15.5, "CAD": 0.19, "AUD": 0.2, "CHF": 0.13 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    if (!amount || isNaN(amount)) {
        document.getElementById("result").innerText = "يرجى إدخال مبلغ صحيح.";
        return;
    }

    if (fromCurrency === toCurrency) {
        document.getElementById("result").innerText = "العملة المختارة هي نفسها.";
        return;
    }

    // حساب قيمة التحويل
    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
