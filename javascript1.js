const product = {
    name: "kemeja pria lengan panjang slimfit kemeja kerja kasual tbb39",
    rating: 4.5,
    price: 135000,
    isActive: true,
    images: ["hitam.jpg", "navy.jpg", "army.jgp", "grey.jpg", "coksu.jpg", "maroon.jpg", "putih.jpg"],
    description: "Tampil lebih modis dengan kemeja pria lengan panjang dan potongan slimfit yang bergaya kasual.",
    variants: {
        warna: ["Hitam", "Navy", "Army", "Grey", "Coksu", "Maroon", "Putih"],
        option: ["M", "L", "XL", "XXL"]
    },
    storeName: "Toko Berkah"
}

const warnaDipilih = "Hitam"
const optionDipilih = "M"
product.name = product.name + " - " + warnaDipilih + "," + optionDipilih  

console.log(product)