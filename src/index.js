module.exports = function reverse(n) {
    let r = 0
    if (n > 1) {
        do {
            r = r * 10 + n % 10;
            n = Math.floor(n / 10);
        }
        while (n > 0);
    }
    else {
        n = n * (-1)
        do {

            r = r * 10 + n % 10;
            n = Math.floor(n / 10);
        }

        while (n > 0);
    }
    return r;
}

