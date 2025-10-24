const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=a96460a2f9e4793c6e5d43bfb099e8a4&query=-0.90591,100.36016&units=m'

request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu diluar mencapai ' + response.body.current.temperature + 
        ' derajat celcius. Kemungkinan terjadinya hujan adalah ' + response.body.current.precip + '%')



    const deskripsi = (response.body.current.weather_descriptions || [])[0] || '-';
    console.log('Deskripsi cuaca: ' + deskripsi);
    console.log('Cuaca hari ini terasa: ${deskripsi.toLowerCase()}');
})