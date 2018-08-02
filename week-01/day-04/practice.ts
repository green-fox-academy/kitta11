
for ( let i: number = 0; i < 100; i++) {
    if (i % 3 == 0) {
        continue;
    } else if (i % 17 == 0) {
        break;
    }
console.log(i);

}