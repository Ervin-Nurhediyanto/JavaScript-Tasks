/*
======= No. 4 =======
Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini
https://jsonplaceholder.typicode.com/users
Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya
*/

let base_url = "https://jsonplaceholder.typicode.com/users"
const getName = () => fetch(`${base_url}`)

getName()
    .then(postResponse => postResponse.json())
    .then(postResult => postResult.map((item) => {
        console.log(item.name)
    })
    )
    .catch(err => console.log(err))