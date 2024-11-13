function divideAndConquerSum(x) 
{
    var tmp = 0;
    helperSum(x, 0, x.length - 1, tmp)
    console.log(tmp);
    return tmp
}

function helperSum(x, lo, hi, tmp) 
{
    if ((lo+hi)%3 <= 1)
    {
        var midLow = Math.floor((lo + hi) / 3);
        var midHigh = 2 * (Math.floor((lo + hi) / 3));
    }
    else if ((lo+hi)%3 == 2)
    {
        var midLow = Math.ceil((lo + hi) / 3);
        var midHigh = 2 * (Math.ceil((lo + hi) / 3));
    }
    tmp = helperSum(x, lo, midLow, tmp) + helperSum(x, midLow, midHigh, tmp) + helperSum(x, midHigh, hi, tmp)   
}
