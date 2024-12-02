async function convertCurrency() {
    
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    let  link=await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
    
    // console.log(link);  

    let l1= await link.json();
    // console.log(l1);

    let rate = l1.rates[toCurrency];
      // console.log(rate);
      
    let convertedAmount = (amount * rate).toFixed(2);
      // console.log(convertedAmount);
      
    const resultElement = document.getElementById("result").value=convertedAmount;
    // console.log( resultElement);

}