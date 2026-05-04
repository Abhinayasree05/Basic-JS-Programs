function checkPrime(num) {

    if (num <= 1) {
        console.log(num + " is Not Prime");
        return;
    }

    for (let i = 2; i < num; i++) {

        if (num % i == 0) {
            console.log(num + " is Not Prime");
            return;
        }
    }

    console.log(num + " is Prime");
}

checkPrime(7);

