/* 
No. 1 Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data  sebagai berikut:
name (string)
age(number)
hobbies (array)
IsMaried (boolean)
schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any, if no set “null” )
skills (Array of Obj) with key skillName and level (beginner, advanced, expert)
interestInCoding (Boolean)
*/

const biodata = {
    name: "Ervin Nurhediyanto",
    age: 24,
    hobbies: ["Traveling", "Gaming", "Spleeping"],
    IsMaried: false,
    schoolList: [
        {
            name: "SD Negeri Kraton 5 Tegal",
            yearIn: 2002,
            yearOut: 2008,
            major: null
        },
        {
            name: "SMP Negeri 7 Tegal",
            yearIn: 2008,
            yearOut: 2011,
            major: null
        },
        {
            name: "SMA Negeri 1 Tegal",
            yearIn: 2011,
            yearOut: 2014,
            major: "IPA"
        },
        {
            name: "Universitas Diponegoro",
            yearIn: 2014,
            yearOut: 2018,
            major: "Electrical Engineering"
        }
    ],

    skills: [
        {
            skillName: "HTML",
            level: "advanced"
        },
        {
            skillName: "CSS",
            level: "advanced"
        },
        {
            skillName: "JavaScript",
            level: "advanced"
        },
        {
            skillName: "Java",
            level: "beginner"
        },
        {
            skillName: "PHP",
            level: "beginner"
        },
        {
            skillName: "MySQL",
            level: "beginner"
        }
    ],

    interestInCoding: true
}

console.log(biodata);