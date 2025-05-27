let a = 10, b = 20, c = 30, d = 40

if (a < b) {
    if (a < c) {
        if (a < d) {
            console.log(a)
        }
        else {
            console.log(d)
        }
    }
    else {
        if (c < d) {
            console.log(c)
        }
        else {
            console.log(d)
        }
    }
}
else {
    if (b < c) {
        if (b < d) {
            console.log(b)
        }
        else {
            console.log(d)
        }
    }
    else {
        if (c < d) {
            console.log(c)
        }
        else {
            console.log(d)
        }
    }
}