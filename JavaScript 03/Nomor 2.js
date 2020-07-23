/*
======= No. 2 =======
Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map
*/

const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember'];
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
};

let postmonth = (mess, month) =>{
    if(mess == null){
        month.map((item) => {
            console.log(item);
        })
    }else{
        console.log(mess);
    }
}

getmonth(postmonth);