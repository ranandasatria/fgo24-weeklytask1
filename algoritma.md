# Weekly Task 1 

## Deteksi Palindrom

**Algoritma**

1. Mulai
2. Masukkan string (kata) yang ingin dicek
3. Ubah string menjadi huruf kecil menggunakan method toLowerCase
4. Ubah string menjadi array menggunakan method split
5. Balik urutan array dengan method reverse
6. Gabungkan array yang sudah dibalik menjadi string kembali dengan method join
7. Jika string awal sama dengan string yang dibalik, tampilkan "Palindrom"
8. Jika tidak sama, tampilkan "Bukan Palindrom"
9. Selesai

**Flowchart**
```mermaid
flowchart
a@{shape: circle, label: "Mulai"}
b@{shape: lean-r, label: "Input = String"}
c@{shape: rect, label: "Ubah menjadi huruf kecil dengan toLowerCase()"}
c1@{shape: rect, label: "Ubah menjadi array dengan split()"}
d@{shape: rect, label: "Balik urutan dengan reverse()"}
d1@{shape: rect, label: "Gabungkan kembali dengan join()"}
e@{shape: diamond, label: "String awal === string yang dibalik"}
f@{shape: lean-r, label: Output = "Palindrom"}
g@{shape: lean-r, label: Output = "Bukan Palindrom"}
h@{shape: dbl-circ, label: "Selesai"}

a-->b-->c-->c1-->d
d-->d1-->e
e--Ya-->f-->h
e--Tidak-->g-->h

```

## Reverse Words

**Algoritma**

1. Mulai
2. Masukkan kalimat yang urutannya ingin dibalik
3. Pecah isi kalimat ke dalam array dengan method split
4. Balik urutan isi array dengan method reverse
5. Gabungkan isi array menjadi satu kalimat kembali dengan method join
6. Tampilkan hasil kalimat yang sudah dibalik urutannya
7. Selesai

**Flowchart**
```mermaid
flowchart

a@{shape: circle, label: "Mulai"}
b@{shape: lean-r, label: "Input = Kalimat"}
c@{shape: rect, label: Pecah isi kalimat menjadi array dengan split(" ") }
d@{shape: rect, label: "Balik isi array dengan reverse()"}
e@{shape: rect, label: Gabungkan kembali menjadi kalimat dengan join(" ")}
f@{shape: lean-r, label: "Output = Kalimat yang dibalik"}
g@{shape: dbl-circ, label: "Selesai"}

a-->b-->c-->d-->e-->f-->g
```
