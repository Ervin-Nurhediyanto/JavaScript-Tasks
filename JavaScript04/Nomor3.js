/*
3. Buatlah Algoritma, Flowchart dan Code untuk soal dibawah ini:

Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas.
*/

const divideAndSort = (number) => {
    const str = number.toString().split('0')
    const map = str.map((item) => {
        return Array.from(item).sort((a, b) => a - b).join('')
    })
    const res = Number(map.join(''))

    console.log(str)
    console.log(map)
    console.log(res)

}

divideAndSort(5956560159466056);

// Array.from(item)                         => [ ['5','9','5','6','5','6'], ['1','5','9','4','6','6'], ['5','6'] ]
// Array.from(item).sort((a, b) => a - b)   => [ ['5','5','5','6','6','9'], ['1','4','5','6','6','9'], ['5','6'] ]

/*
=== Algoritma ===
1. Mulai
2. Buat Function dengan nama divideAndSort dan parameter number
3. Masukan input data pada parameter number
4. Ubah data menjadi string
5. Pisahkan data dengan pemisah 0 (nol)
6. Sortir masing-masing data yang telah dipisahkan
7. Gabungkan kembali data yang telah disortir
8. Ubah kembali data menjadi Number
9. Tampilkan output data
10. Selesai
*/