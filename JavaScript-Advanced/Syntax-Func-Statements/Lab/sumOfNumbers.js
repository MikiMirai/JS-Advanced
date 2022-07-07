function strlen(a,b)
{
    let result=0;
    let number1=Number(a);
    let number2=Number(b);

    for (let index = number1; index <= number2; index++) 
    {
        result += index;

    } 
    console.log(result);
};