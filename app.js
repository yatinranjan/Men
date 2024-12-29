// const http = require('http');

// const server = http.createServer((req, res) => {
// //     console.log(req.url)
// //   res.end('Hello, World!');
//     if(req.url === '/about'){
//         res.end('The about page');
//     }
//     if(req.url === '/profile'){
//         res.end('The profile page');
//     }
//     if(req.url === '/'){
//         res.end('The home page');
//     }
// })

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// })

// express
const express = require('express');
const { console } = require('inspector');
const app = express();

app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log('this is the first middleware');
    const a = 2;
    const b = 3;
    console.log(a + b);
    return next();
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.send('The about page');
})

app.get('/profile', (req, res) => {
    res.send('The profile page');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})