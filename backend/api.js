// vi skal bruge http libary fra node til at lave en lille sever
const http = require('http');
// sætte en port hvor vi lytte efter request, først kikker vi efter om der er en port i environment deklaration.
// hvis ikke så sætte vi porten til 5000
const PORT = process.env.PORT || 5000

// vi "importer" scraperen
const { scraperPage } = require('./scraper');


// her laver vi serveren
const server = http.createServer((req, res) => {
    // en basal web server
    // her sætter vi status kode og hvad man får tilbage når man gå ind på localhost:5000
    // nemlig en side som viser Hello world
    // til sidst lukker vi res som er result

    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>Hello world</h1>')
    // res.end()


    if(req.url === '/api/scraper' && req.method === 'POST') {
        scraperPage(req, res)
    }

})

// starter serveren
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));