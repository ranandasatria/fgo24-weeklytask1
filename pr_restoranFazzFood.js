const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const food = [
    {nama: "Nasi Goreng Kampung", harga: 15000},
    {nama: "Mie Ayam Wonogiri", harga: 14000},
    {nama: "Soto Betawi", harga: 20000},
    {nama: "Ketoprak Cirebon", harga: 12000},
    {nama: "Bakso Malang", harga: 17000},
]

const drink = [
    {nama: "Es Teh Kampul", harga: 4000},
    {nama: "Es Jeruk Liar", harga: 5000},
    {nama: "Jus Terong Belanda", harga: 8000},
    {nama: "Air Kelapa", harga: 6000},
    {nama: "Air Putih Anget", harga: 1000}
]

const snack = [
    {nama: "Kacang Atom", harga: 3000},
    {nama: "Kerupuk Jangek", harga: 5000},
    {nama: "Otak-otak", harga: 2000},
    {nama: "Peyek", harga: 4000},
    {nama: "Gorengan", harga: 1500}
]

const dessert = [
    {nama: "Es Krim Xue", harga: 19000},
    {nama: "Cendol Dawet", harga: 15000},
    {nama: "Martabak Mesir", harga: 20000},
    {nama: "Coklat Dubai", harga: 60000},
    {nama: "Mango Sago", harga: 30000}
]

let cart = []

function home(){
    console.log(`1. Menu \n2. Keranjang \n3. Checkout`)
    rl.question(`Silakan masukkan angka: `, (opt1) => {
        if (opt1 === "1") {
            pilihKategori()
        } else if (opt1 === "2") {
            keranjang()
        } else if (opt1 === "3") {
            checkout()
        } else {
            errorMessage()
        }
    })
}

function pilihKategori(){
    console.log(`1. Makanan\n2. Minuman\n3. Snack\n4. Dessert\n0. Home`)
    rl.question(`Silakan masukkan angka: `, (item)=>{
        if (item === "1") {
            menuMakanan()
        } else if (item === "2") {
            menuMinuman()
        } else if (item === "3") {
            menuSnack()
        } else if (item === "4") {
            menuDessert()
        } else if (item === "0") {
            home()
        } else {
            errorMessage()
        }
    })
}
function menuMakanan(){
    console.log(`1. Nasi Goreng Kampung\n2. Mie Ayam Wonogiri\n3. Soto Betawi\n4. Ketoprak Cirebon\n5. Bakso Malang\n0. Home`)
    rl.question(`Pilih nomor menu: `, (input) => {
        if (input === "0") {
            home()
        } else if (input === "1" || input === "2" || input === "3" || input === "4" || input === "5") 
                {
            const index = input - 1
            const item = food[index]
            cart = [...cart, item]
            console.log(`${item.nama} ditambahkan ke keranjang`)
            home()
        } else {
            errorMessage()
        }
    })
}

function menuMinuman(){
    console.log(`1. Es Teh Kampul\n2. Es Jeruk Liar\n3. Jus Terong Belanda\n4. Air Kelapa\n5. Air Putih Anget\n0. Home`)
    rl.question(`Pilih nomor menu: `, (input) => {
        if (input === "0") {
            home()
        } else if (input === "1" || input === "2" || input === "3" || input === "4" || input === "5") {
            const index = input - 1
            const item = drink[index]
            cart = [...cart, item]
            console.log(`${item.nama} ditambahkan ke keranjang`)
            home()
        } else {
            errorMessage()
        }
    })
}

function menuSnack(){
    console.log(`1. Kacang Atom\n2. Kerupuk Jangek\n3. Otak-otak\n4. Peyek\n5. Gorengan\n0. Home`)
    rl.question(`Pilih nomor menu: `, (input) => {
        if (input === "0") {
            home()
        } else if (input === "1" || input === "2" || input === "3" || input === "4" || input === "5") {
            const index = input - 1
            const item = snack[index]
            cart = [...cart, item]
            console.log(`${item.nama} ditambahkan ke keranjang`)
            home()
        } else {
            errorMessage()
        }
    })
}

function menuDessert(){
    console.log(`1. Es Krim Xue\n2. Cendol Dawet\n3. Martabak Mesir\n4. Coklat Dubai\n5. Mango Sago\n0. Home`)
    rl.question(`Pilih nomor menu: `, (input) => {
        if (input === "0") {
            home()
        } else if (input === "1" || input === "2" || input === "3" || input === "4" || input === "5") {
            const index = input - 1
            const item = dessert[index]
            cart = [...cart, item]
            console.log(`${item.nama} ditambahkan ke keranjang`)
            home()
        } else {
            errorMessage()
        }
    })
}

function keranjang(){
    if (cart.length === 0) {
        console.log("Keranjangmu kosong.")
    } else {
        console.log("Isi keranjangmu:")
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i]
            console.log(`${i + 1}. ${item.nama} - Rp${item.harga}`)
        }
    }
    home()
}

function errorMessage(){
    console.log(`Input tidak valid`);
    home()
}

function checkout(){
    if (cart.length === 0) {
        console.log("Keranjangmu kosong. Belum bisa checkout.")
        home()
    } else {
        let total = 0
        for (let i=0;i < cart.length;i++) {
            const item = cart[i]
            console.log(`${i + 1}. ${item.nama} - Rp${item.harga}`)
            total += item.harga
        }
        console.log(`Total yang harus dibayar: Rp${total}`)
        console.log("Terima kasih sudah berbelanja!")
        rl.close()
    }
}

home()
