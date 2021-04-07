const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoConnect = require('./utilities/db').mongoConnect; 
const dataRouter = require('./routes/dataRoutes');
const app = express();


app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(dataRouter);


mongoConnect(() =>{ //rakendus ühendub andmebaasiga
    app.listen(3000, ()=>{
        console.log('Server is running on port 3000');
    });
});