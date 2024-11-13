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

    var midLow = Math.floor(((2 * lo) + hi) / 3);
    var midHigh = Math.floor((lo + (2 * hi)) / 3);

    var sumThird1 = helperSum(x, lo, midLow);
    var sumThird2 = helperSum(x, midLow + 1, midHigh);
    var sumThird3 = helperSum(x, midHigh + 1, hi);

    return sumThird1 + sumThird2 + sumThird3;
}
