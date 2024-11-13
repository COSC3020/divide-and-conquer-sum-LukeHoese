function divideAndConquerSum(x) 
{
    return helperSum(x, 0, x.length - 1)
}

function helperSum(x, lo, hi) 
{
    if (lo > hi) 
    {
        return 0;
    }
    if(lo === hi)
    {
        return x[lo]
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

    var sumThird1 = helperSum(x, lo, midLow);
    var sumThird2 = helperSum(x, midlow + 1, midHigh);
    var sumThird3 = helperSum(x, midHigh + 1, hi);

    return sumThird1 + sumThird2 + sumThird3;
}
