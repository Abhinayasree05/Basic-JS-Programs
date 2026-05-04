function isPrime(n) {
    if (n <= 1) {
        return false; // 0 and 1 are not prime
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // divisible → not prime
        }
    }

    return true; // no divisors found → prime
}

// Example usage
let num = 7;

if (isPrime(num)) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is NOT a Prime Number");
}