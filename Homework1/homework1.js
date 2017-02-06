main = function() {
    for(var i=4; i<=20; i++)
    {
        square(i);
        chalk.newline();
    }
}

function square(n) {
    for(var i=0; i<n; i++)
    {
        for(var j=0; j<n; j++)
        {
            if(i==0 | j==0 | i==n-1 | j==n-1)
                chalk.print("*");
            else
                chalk.print(" ");
        }
        chalk.newline();
    }
}  
