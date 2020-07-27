/*
2. Reverse Words
Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi terbalik ("tidak boleh menggunakan reverse()"). Misalnya kalimat "Saya belajar Javascript", output "Javascript belajar Saya"
*/

const reverseWord = (text) => {
    const reverse = text.split(' ').map((item, idx, arr) => {
        return arr[arr.length - 1 - idx];
    })
    console.log(reverse.join(' '));
    // console.log(text.split(' ').length);
}
reverseWord('Saya belajar Javascript')