function hitungDiskon(totalBelanja) {
    let diskon = 0;
    let totalAkhir = totalBelanja;

    if (totalBelanja >= 1000000) {
        diskon = 10;
    } else if (totalBelanja >= 500000) {
        diskon = 5;
    }

    if (diskon > 0) {
        const potongan = (diskon / 100) * totalBelanja;
        totalAkhir = totalBelanja - potongan;
        console.log(`Anda mendapatkan diskon ${diskon}%, total belanja anda menjadi Rp ${totalAkhir}`);
    } else {
        console.log(`Anda tidak mendapatkan diskon, total belanja anda Rp ${totalAkhir}`);
    }
}

const totalBelanja = 1200000;

hitungDiskon(totalBelanja);
