//const fs = require('fs')
//fs.writeFileSync('catatan.txt', 'Nama saya Devani')
//fs.appendFileSync('catatan.txt', ', Saya tinggal di Padang')

//const catatan = require('./catatan.js')
//const pesan = catatan()
//console.log(pesan)

/*
const validator = require('validator')
const ambilCatatan = require('./catatan.js')
const pesan = ambilCatatan()
console.log(pesan)
console.log(validator.isURL('https://proska.com'))
*/

// ARGV
/*
const ambilCatatan = require('./catatan.js')

const command = process.argv[5]
console.log(process.argv[2])
*/

// YARGS
/*
const { hideBin } = require('yargs/helpers')
const yargsFactory = require('yargs/yargs')
const catatan = require('./catatan.js')

// buat instance yargs
const yargs = yargsFactory(hideBin(process.argv))
yargs.version('10.1.0')

// Perintah 'tambah'
yargs.command({
  command: 'tambah',
  describe: 'tambah sebuah catatan baru',
  handler: function () {
    console.log('sebuah catatan baru ditambahkan!')
  }
})

// Perintah 'hapus'
yargs.command({
  command: 'hapus',
  describe: 'hapus catatan',
  handler: function () {
    console.log('Catatan berhasil dihapus')
  }
})
console.log(yargs.argv)

*/

const yargsFactory = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const catatan = require('./catatan.js')

// buat instance yargs
const yargs = yargsFactory(hideBin(process.argv)).version('10.1.0')

// Perintah 'tambah'
yargs.command({
  command: 'tambah',
  describe: 'tambah sebuah catatan baru',
  builder: {
    judul: {
      describe: 'Judul catatan',
      demandOption: true,
      type: 'string'
    },
    isi: {
      describe: 'Isi catatan',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    catatan.tambahCatatan(argv.judul, argv.isi)
  }
})

// Perintah 'hapus'
yargs.command({
  command: 'hapus',
  describe: 'hapus catatan',
  builder: {
    judul: {
      describe: 'Judul catatan',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    catatan.hapusCatatan(argv.judul)
  }
})

yargs.command({
  command: 'list',
  describe: 'tampilkan semua catatan',
  handler: function () {
    catatan.listCatatan()
  }
})

// command read
yargs.command({
  command: 'read',
  describe: 'baca catatan',
  builder: {
    judul: {
      describe: 'Judul catatan',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    catatan.bacaCatatan(argv.judul)
  }
})
// parse argumen (gantikan console.log(yargs.argv))
yargs.parse()