// ===== No. 3 =====
// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.

// Contoh: 
// SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])

// Output:
// [8, 14, 17]

// SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])

// Output:
// “Nilai akhir harus lebih besar dari nilai awal”

// SeleksiNilai(4, 17 , [2, 25, 4])

// Output:
// “Jumlah angka dalam dataArray harus lebih dari 5”

const SeleksiNilai = (num1, num2, arr) => {
  let sortArr = arr.sort((a, b) => a - b);
  let filterArr = sortArr.filter((item) => {
    return item > num1 && item < num2
  });
  if (sortArr.length > 5) {
    if (num2 > num1) {
      if (filterArr != "") {
        console.log(filterArr);
      } else {
        console.log("Tidak ada Data");
      }
    } else {
      console.log("Nilai akhir harus lebih besar dari nilai awal");
    }
  } else {
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  }
}
SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);