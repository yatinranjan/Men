let http=require('http');
const { json } = require('stream/consumers');

let server = http.createServer((req, res) => {
    // res.end('Hello, World!');
    if(req.url == "/news") {
        let obj = {
            status:1,
            data:[
                {
                    newsTitle:'News 1',
                    newsDes:'This is news 1'
                },
                {
                    newsTitle:'News 2',
                    description:'This is news 2'
                }
            ]
        }
        res.end(json.stringify(obj));
    }
    if(req.url === '/about') {
        // res.end('The contact page');
    }
    if(req.url === '/course') {
        // res.end('The services page');
    }   
    if(req.url === '/') {
        res.end('Welcome to ws');
    }
});
server.listen(8000, () => {
    console.log('Server is running on port 8000');
});