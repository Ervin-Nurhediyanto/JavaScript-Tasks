/*
======= No. 1 =======
Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja dari kode Asynchronous dibawah dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya:
*/

const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
            let cek = dataDay.find((item) => {
                return item.toLowerCase() === day.toLowerCase()
            })
            if (cek) {
                resolve(`${cek} hari kerja`)
            } else {
                reject(new Error(`Hari ${day.toLowerCase()} bukan hari kerja`))
            }
        }, 3000)
    })
}

cekHariKerja('senin')
    .then((res) => {
        console.log(`${res} (then catch)`)
    })
    .catch((err) => {
        console.log(`${err} (then catch)`)
    });

// Fungsi then dan catch adalah untuk mengolah hasil sukses dan gagal

const checkDay = async (day) => {
    console.log(`Sekarang hari ${day.toLowerCase()}`)
    try {
        result = await cekHariKerja(day)
        console.log(`${result} (try catch)`)
    } catch (error) {
        console.log(`${error.message} (try catch)`);
    }
    
}
checkDay('senin')

// try menentukan blok kode yang akan diuji untuk kesalahan ketika sedang dieksekusi.
// catch menentukan blok kode yang akan dieksekusi, jika kesalahan terjadi pada blok try.
// async → mengubah function menjadi asynchronous
// await → menunda eksekusi hingga proses asynchronous selesai