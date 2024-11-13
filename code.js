function divideAndConquerSum(x) 
{
    if (x == [])
    {
        return 0;
    }
    var tmp = 0;
    helperSum(x, 0, x.length - 1)
}

function helperSum(x, lo, hi) 
{
    if(lo >= hi)
    {
        return helperSum(x, lo, midLow) + helperSum(x, midLow, midHigh) + helperSum(x, midHigh, hi)
    }
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
}
