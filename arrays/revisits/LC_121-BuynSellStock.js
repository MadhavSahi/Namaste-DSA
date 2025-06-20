var maxProfit = function (prices) {
    // REVISIT.
    let n = prices.length;
    if (n == 1) {
        return 0;
    }
    let minimum=prices[0];
    let CurrMax=0;
    for(let i=1;i<n;i++){
        if(prices[i]-minimum>CurrMax){
            CurrMax=prices[i]-minimum;
        }
        if(minimum>prices[i]){
            minimum=prices[i];
        }
    }
    return CurrMax;
}
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4]));