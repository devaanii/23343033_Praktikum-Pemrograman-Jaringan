const fs = require('fs')

const dataBuffer = fs.readFileSync('1-jsontest.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.judul)

// SIMPAN DATA MENGGUNAKAN JSON
/*
const buku = {
  judul: 'Pemrograman Jaringan',
  penulis: 'Raditya Putra Farma'
}

const bukuJSON = JSON.stringify(buku, null, 2)
fs.writeFileSync('1-jsontest.json', bukuJSON)
*/
