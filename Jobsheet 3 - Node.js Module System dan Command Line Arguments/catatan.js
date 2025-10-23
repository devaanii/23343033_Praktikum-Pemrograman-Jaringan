const fs = require('fs')
const chalk = require('chalk')

const ambilCatatan = function (){
    return 'Ini adalah catatan devani'
} 

const tambahCatatan = function(judul, isi){
    const catatan = muatCatatan()
    const catatanGanda = catatan.filter(function(note){
        return note.title === judul
    })

    if(catatanGanda.length === 0){
        catatan.push({
            judul: judul,
            isi: isi
        })
        simpanCatatan(catatan)
        console.log('Catatan berhasil ditambahkan')
    } else {
        console.log('Judul catatan sudah digunakan')
    }
}

const hapusCatatan = function(judul){
    const catatan = muatCatatan()
    const catatanUntukDisimpan = catatan.filter(function(note){
        return note.judul !== judul
    })
    
    if (catatan.length > catatanUntukDisimpan.length){
        simpanCatatan(catatanUntukDisimpan)
        console.log(chalk.green.inverse('Catatan berhasil dihapus'))
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan'))
    }
}

const simpanCatatan = function(catatan){
    const dataJSON = JSON.stringify(catatan)
    fs.writeFileSync('catatan.json', dataJSON)
}

const muatCatatan = function(){
    try {
        const dataBuffer = fs.readFileSync('catatan.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


// tampilkan semua catatan
const listCatatan = function () {
  const catatan = muatCatatan()
  console.log(chalk.inverse('Daftar Catatan'))
  if (catatan.length === 0) {
    console.log(chalk.yellow('Belum ada catatan'))
    return
  }
  catatan.forEach((note, i) => {
    console.log(`${i + 1}. ${note.judul}`)
  })
}

//  baca satu catatan berdasarkan judul
const bacaCatatan = function (judul) {
  const catatan = muatCatatan()
  const note = catatan.find((n) => n.judul === judul)

  if (note) {
    console.log(chalk.inverse(note.judul))
    console.log(note.isi)
  } else {
    console.log(chalk.red.inverse('Catatan tidak ditemukan!'))
  }
}

module.exports = {
    ambilCatatan: ambilCatatan,
    tambahCatatan: tambahCatatan,
    hapusCatatan: hapusCatatan,
    listCatatan: listCatatan,
    bacaCatatan: bacaCatatan
}