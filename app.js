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
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
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