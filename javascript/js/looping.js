let mulai = 1;
let selesai = 10;

while (mulai <= selesai) {
    console.log(mulai);
    mulai++;
}

console.log("----------------------");

let start = 100;
let finish = 110;

do {
    console.log(start);
    start++;
} while (start < finish);

console.log("----------------------");

let awal = 1;
let akhir = 10;

for (awal; awal < akhir; awal++) {
    console.log(awal);
}

console.log("----------------------");

for (let i = 1; i < 10; i = i + 4) {
    console.log(i);
}