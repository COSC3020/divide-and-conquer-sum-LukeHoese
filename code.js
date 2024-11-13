/*
I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.

I wrote an original version of the code from scratch with a variety of issues
which I copied into chat GPT for help debugging. I worked through each issue step by step
and made sure I understood every change I made.
*/
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
