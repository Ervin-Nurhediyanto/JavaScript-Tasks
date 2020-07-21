// ===== No. 1 =====
// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

const text01 = "Ini Kalimat Pertama ";
const text02 = "Ini Kalimat Kedua";
const dataArr = ["satu", "dua", "tiga", "empat", "lima"];
const newDataArr = [... dataArr];

const method = {
  toUpperCase: text01.toUpperCase(), // Mengubah nilai variabel menjadi uppercase.
  toLowerCase: text02.toLowerCase(), // Mengubah nilai variabel menjadi lower case.
  concat: text01.concat(text02),     // Menggabungkan 2 variabel menjadi satu.
  indexOf: text01.indexOf("tama"),   // Mengembalikan indeks dalam objek String panggilan dari kemunculan pertama dari nilai yang ditentukan, atau -1 jika tidak ditemukan.
  join: dataArr.join(),              // Menggabungkan semua elemen array menjadi string.
  split: text01.split(" "),          // Membagi String menjadi array dengan memisahkan string menjadi substring.
  shift: dataArr.shift(),            // Menghapus elemen pertama dari array dan mengembalikan elemen itu.
  pop: dataArr.pop(),                // Menghapus elemen terakhir dari array dan mengembalikan elemen itu.
  slice: dataArr.slice(1, 3),        // Ekstrak bagian array dan mengembalikan array baru.
  reverse: newDataArr.reverse(),     // Membalik urutan elemen-elemen array.
  toString: dataArr.toString()       // Mengubah data menjadi String.
};

const keys = Object.keys(method);
const values = Object.values(method);
for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]} : ${values[i]}`);
}