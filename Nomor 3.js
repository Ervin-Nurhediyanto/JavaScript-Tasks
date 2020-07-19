/*
No. 3 Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

Contoh: 
const printSegitiga = 5

Output: 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/

const printSegitiga = 5;
if (typeof printSegitiga == "number") {
    for (let i = 0; i < printSegitiga; i++) {
        let line = "";
        for (let j = 0; j < (printSegitiga - i); j++) {
            line += (printSegitiga - i);
        }
        console.log(line);
    }
} else {
    console.log("Data harus number");
}