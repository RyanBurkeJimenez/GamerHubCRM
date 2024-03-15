/* Create and initialize express for server talk*/
const express = require('express')
const path = require('path')
const mongoose = require ('mongoose')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const app = express()

/*Set view engine to EJS to allow */
app.set('view engine', 'ejs')

/*Set Layouts for EJS readability and template usage */
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

/*Body Parser enabled to read URL when passing arguments */
app.use(express.urlencoded({ extended: false }))

/*Set up static files for server to use while running API*/
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))
/*Connect to GamerHub MongoDB Cluster */

console.log(process.env.DATABASE_URL)
const DB = process.env.DATABASE_URL.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB)
.then (() => {console.log('Connection to GamerHub Database successful')})
.catch(err => {console.log('Unsuccessful connection to database, try again.')
console.log(err)})
/*Location for all Router Calls on Server.js */
const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')
const helpRouter = require('./routes/IThelp')
const newEmpRouter = require('./routes/newEmp')
const DataRouter = require('./routes/DataManagement')

/* Setting up default routes for the API */

app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/help', helpRouter)
app.use('/newEmp', newEmpRouter)
app.use('/CDM', DataRouter)


const port = process.env.PORT;
const server = app.listen(port, () => {
console.log(`App running on port ${port}...`);
console.log(`GamerHub CRM accessible here --> http://localhost:${port}`);
});
