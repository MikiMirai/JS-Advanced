function gcd(a, b) {
    while (a !== b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    console.log(a);
}

gcd(2154, 458)