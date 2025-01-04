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
const morgan = require('morgan');
// const { console } = require('inspector');
const app = express();
const userModel = require('./models/user');
const dbConnection = require('./config/db');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log('this is middleware');
    const a = 2;
    const b = 3;
    console.log(a + b);
    return next();
})

app.get('/', 
    (req, res, next) => {
    const a = 5;
    const b = 10;
    console.log(a + b);

    next();
}
,(req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.send('The about page');
})

app.get('/profile', (req, res) => {
    res.send('The profile page');
})

app.get('/register', (req, res) => {
    res.render('register');
})
app.post('/register', async (req, res) => {
    const {username, email, password} = req.body;
    
    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    });
    res.send(newUser)
});

app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send('data received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})