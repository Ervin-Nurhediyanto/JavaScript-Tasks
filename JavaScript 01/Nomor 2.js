/*
No. 2 Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
90 - 100 = A
80 - 89 = B
70 - 79 = C
60 - 69 = D
0 - 59 = E
*/

const nilaiUN =
{
    bahasaIndo: 91,
    bahasaIng: 82,
    matematika: 95,
    ipa: 92
};

const mapel = Object.keys(nilaiUN);
const nilai = Object.values(nilaiUN);
let totalNilai = 0;

for (let i = 0; i < nilai.length; i++) {
    if (typeof nilai[i] == "number") {
        totalNilai += nilai[i];
    } else {
        console.log(`Nilai ${mapel[i]} Tidak Valid`);
    }
}

let average = totalNilai / nilai.length;
let grade;
if (average >= 90 && average <= 100) {
    grade = "A";
} else if (average >= 80 && average <= 89) {
    grade = "B";
} else if (average >= 70 && average <= 79) {
    grade = "C";
} else if (average >= 60 && average <= 69) {
    grade = "D";
} else if (average >= 0 && average <= 59) {
    grade = "E";
}

console.log(nilaiUN);
console.log(`
Total Nilai : ${totalNilai}
Rata-Rata Nilai : ${average}
Grade : ${grade}`);