const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))
//

app.post('/home', (req, res)=>{
    res.render('home')
})

// run the server
app.listen(process.env.PORT, ()=>{
    console.log(`app is started at http://localhost:${process.env.PORT}`);
})

