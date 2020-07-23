/* ======= No. 3 =======
Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1
*/

// Program Pertama : Check Item
const checkItems = (search) => {
    return new Promise((resolve, reject) => {
        
            const itemList = ['Baju', 'Tas', 'Handphone', 'Laptop'];
            let check = itemList.find((item) => {
                return item.toLowerCase() === search.toLowerCase()
            })
            if (check) {
                resolve(`${check} tersedia`)
            } else {
                reject(new Error(`Barang yang anda cari tidak ditemukan`))
            }
        
    })
}

checkItems('LAPTOP')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    });

// Program kedua : Buy Item
const buyItem = (pay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemPrice = 500000;
            if (pay >= itemPrice) {
                resolve('Terimakasih telah membeli produk kami')
            } else {
                reject(new Error(`Maaf uang anda tidak cukup`))
            }
        }, 3000)
    })
}

buyItem(3000000)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    });