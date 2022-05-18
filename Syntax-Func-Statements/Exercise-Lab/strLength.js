function strlen(a, b, c)
{
    let sumLength;
    let avgLength;

    let aLength = a.length;
    let bLength = b.length;
    let cLength = c.length;

    sumLength = aLength + bLength + cLength;
    avgLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avgLength);
}