const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Index sayfasi')
    } else if (req.url === '/hakkimda') {
        res.write('Hakkimda sayfasi')
    } else if (req.url === '/iletisim') {
        res.write('Iletisim sayfasi')
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('404 sayfasi')
    }

    res.end();
});


server.listen(port, () => {
    console.log(`Sunucu port ${ port }'de çalışmaya başladı.`)
})