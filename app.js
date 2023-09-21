const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view engine','ejs'); 
app.engine('ejs', require('ejs').__express);

app.use(express.static(path.join(__dirname,'public')))

app.get('/signup', (req,res)=>{
    res.render('signup')
})

app.get('/login', (req,res)=>{
    res.render('login')
})



app.post('/login', (req,res)=>{
    const {username, password} = req.body;
    console.log(username)
    console.log(password)
})

app.post('/signup', (req,res)=>{
    const {username, email,  password} = req.body;
    console.log(username)
    console.log(email)
    console.log(password)

})

const port = 3000;
const start = async () =>{
    try {
        //await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()