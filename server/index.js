const express = require('express');
const bodyParser = require('body-parser');
const massive = require ('massive');
const dotenv = require ('dotenv');
dotenv.config();
const app = express();
app.use(bodyParser.json());
const controller = require ('./controller');

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    console.log('massive connected')
    app.set('db', dbInstance);
}).catch(error=>{
    console.log('----error', error);
});

app.listen(4000, ()=>{
    console.log('server is listening on port 4000'  );  
});


app.get('/api/user-data', controller.getUserData);
// app.post('/api/post/:userid', controller.createPost);
