let str = "HELLO";
let rev = "";
for (let i = Math.floor(str.length - 1); i >= 0; i--) {
    rev = rev + str[i];
}

console.log("Reversed String is: " + rev);