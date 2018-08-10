slowMath
    .add(1, 1)
    .then((sum) => {
        console.log(sum);
        return slowMath.multiply(sum, 2);
    })
    .then((product) => {
        console.log(product);
        return slowMath.divide(product, 4);
    })
    .then((quotient) => {
        console.log(quotient);
        return slowMath.subtract(quotient, 3);
    })
    .then((difference) => {
        console.log(difference);
        return slowMath.add(difference, 98);
    })
    .then((sum) => {
        console.log(sum);
        return slowMath.remainder(sum, 2);
    })
    .then((remainder) => {
        console.log(remainder);
        return slowMath.multiply(remainder, 50);
    })
    .then((product) => {
        console.log(product);
        return slowMath.remainder(product, 40);
    })
    .then((remainder) => {
        console.log(remainder);
        return slowMath.add(remainder, 32);
    })
    .then((sum) => {
        console.log(sum);
    })
    .catch((err) => {
        console.log(err);
    });
