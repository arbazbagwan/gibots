const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(cors());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('./views', __dirname); 
app.use(express.static(__dirname+'/public'));



app.use("/api", (req, res)=>{
    fetch('https://api.wazirx.com/api/v2/tickers')
    .then(res => res.json())
    .then(json => {
         res.render("index.html",{user: json});
    });
    
});


//Defining Port
app.listen("2000", (req, res)=>{
    console.log("App is running at port 2000");
})