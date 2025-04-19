// 1. Mencetak angka sesuai jumlah baris

// a. Langsung menggunakan variabel dan loop
const printSquare = 6

if(typeof printSquare !== "number"){
    console.log(`Data yang dimasukkan harus angka`)
} else {
    for(let i = 0; i < printSquare; i++){
        let baris = ""
        for (let j = 1; j <= printSquare; j++){
            baris += j + " "
        }
        console.log(baris)
    }
}

// b. Menggunakan function

// const printSquare = (num) => {
//     if(typeof num !== "number"){
//         console.log(`Data yang dimasukkan harus angka`)
//     } else {
//         for (let i = 0; i < num; i++){
//             let baris = ""
//             for (let j = 1; j <= num; j++){
//                 baris += j + " "
//             }
//         console.log(baris)
//         }
//     }
// } 

// printSquare(3)
// printSquare(7)



// 2. Menggabungkan array menggunakan spread operator
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arrGabungan = [
    ...arr1, 
    ...arr2
]
console.log(arrGabungan)