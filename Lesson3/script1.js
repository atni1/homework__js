let num = 100
let i = 2

nextPrime:
while (i < num) {
    let j = 2
    i++;
    while (j < i) { 
        if (i % j == 0) continue nextPrime
        j++; 
    }
    console.log(i);  
}