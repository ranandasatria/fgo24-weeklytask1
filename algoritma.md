# Weekly Task 1 

## Deteksi Palindrom

**Algoritma**

1. Mulai
2. Masukkan teks yang ingin dicek
3. Ubah semua huruf menjadi huruf kecil (supaya tidak sensitif huruf besar/kecil)
4. Balik urutan huruf dari teks tersebut
5. Bandingkan teks asli dan teks yang sudah dibalik
6. Jika sama, tampilkan "Palindrom"
7. Jika tidak sama, tampilkan "Bukan Palindrom"
8. Selesai

**Flowchart**
```mermaid
flowchart
a@{shape: circle, label: "Mulai"}
b@{shape: lean-r, label: "Input = teks"}
c@{shape: rect, label: "Ubah teks ke huruf kecil"}
d@{shape: rect, label: "Balik urutan teks"}
e@{shape: diamond, label: "Teks asli === teks yang dibalik"}
f@{shape: lean-r, label: Output = "Palindrom"}
g@{shape: lean-r, label: Output = "Bukan Palindrom"}
h@{shape: dbl-circ, label: "Selesai"}

a-->b-->c-->d
d-->e
e--Ya-->f-->h
e--Tidak-->g-->h

```

## Reverse Words

**Algoritma**

1. Mulai
2. Masukkan kalimat yang ingin dibalik urutan kata-katanya
3. Pisahkan kalimat menjadi kata-kata 
4. Balik urutan kata-kata tersebut
5. Gabungkan kembali kata-kata yang sudah dibalik menjadi satu kalimat
6. Tampilkan hasil kalimat yang sudah dibalik urutannya
7. Selesai

**Flowchart**
```mermaid
flowchart

a@{shape: circle, label: "Mulai"}
b@{shape: lean-r, label: "Input = Kalimat"}
c@{shape: rect, label: "Pisahkan kalimat jadi kata-kata"}
d@{shape: rect, label: "Balik urutan kata-kata"}
e@{shape: rect, label: "Gabungkan kata-kata yang dibalik menjadi kalimat"}
f@{shape: lean-r, label: Output = "Kalimat yang dibalik"}
g@{shape: dbl-circ, label: "Selesai"}

a-->b-->c-->d-->e-->f-->g
```
