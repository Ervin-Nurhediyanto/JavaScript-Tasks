/*
1. Deteksi Palindrom
Diberikan sebuah teks, periksa apakah kata tersebut adalah palindrom atau tidak. Misalnya teks "Malam", output = palindrom.
*/

const checkPalindrome = (input) => {
    const reverse = input.toLowerCase().split("").reverse().join('')
    if (input.toLowerCase() == reverse) {
        console.log(`${input} merupakan kata Palindrom`);
    } else {
        console.log(`${input} bukan kata Palindrom`);
        console.log(`${input} jika dibalik menjadi : ${reverse}`);
    }
}

checkPalindrome('Malam');