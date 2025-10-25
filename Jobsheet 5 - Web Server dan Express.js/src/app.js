const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Mendefinisikan jalur/path untuk konfigurasi Express
const direktoriPublik = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

//Setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)

//Setup direktori statis
app.use(express.static(direktoriPublik))

//halaman utama
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca', 
        nama: 'Devani' })
})

app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Bantuan',
        teksBatuan: 'Ini adalah halaman bantuan',
        nama: 'Devani'
    })
})

app.get('/infoCuaca', (req, res) => {
    res.send([{
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang'
    }])
})

// halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Devani'
    })
})

app.get('/bantuan/', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Devani',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
    })
})

// wildcard untuk semua halaman lain
app.use((req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Devani',
        pesanKesalahan: 'Halaman tidak ditemukan.'
    })
})

app.listen(4000, () => {
    console.log('Server berjalan pada port 4000')
})