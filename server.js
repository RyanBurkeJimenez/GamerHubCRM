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
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))
app.use('/static', express.static('node_modules'))
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))

/*Connect to GamerHub MongoDB Database */

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
/*Home Routers*/
const indexRouter = require('./routes/index')

/*Customer Data Management Routers */
const loginRouter = require('./routes/CDM/login')
const custRouter = require('./routes/CDM/customerRoutes')
const updateRouter = require('./routes/CDM/updateCustomer')
const DataRouter = require('./routes/CDM/DataManagement')

/*Customer Interaction Hub Routers */
const loginIntRouter = require('./routes/CIH/loginInteraction')
const interactionRouter = require('./routes/CIH/InteractionHub')
const interaction2Router = require('./routes/CIH/InteractionHub2')

/*Reporting and Analytics Routers */
const loginRARouter = require('./routes/RandA/loginRA')
const RandARouter = require('./routes/RandA/RandA')

/*Inveotry Management Routers */
const loginInventoryRouter = require('./routes/Inventory/loginInventory')
const InventoryRouter = require('./routes/Inventory/inventoryHub')
const addInventoryRouter = require('./routes/Inventory/addInventory')
const tbdSupplierRouter = require('./routes/Inventory/tbdSupplier')

/*Administrative Routers */
const newEmpRouter = require('./routes/Admin/newEmp')
const adminRouter = require('./routes/Admin/loginAdmin')


/*IT Help Routers */
const helpRouter = require('./routes/ITHelp/IThelp')


/* Setting up default routes for the API */

/*Home Route */
app.use('/', indexRouter)

/*CDM Routes */
app.use('/login', loginRouter)
app.use('/CDM', DataRouter)
app.use('/CDM/Customer/Add', custRouter)
app.use('/CDM/Customer/Update', updateRouter)


/*Customer Interaction Hub Routes */
app.use('/login/CIH',loginIntRouter)
app.use('/CIH', interactionRouter)
app.use('/CIH/pg2', interaction2Router)

/*Reporting and Analytics Routes */
app.use('/login/RandA', loginRARouter)
app.use('/RandA', RandARouter)

/*Inventory Management Routes */
app.use('/login/Inventory', loginInventoryRouter)
app.use('/Inventory', InventoryRouter)
app.use('/Inventory/Add', addInventoryRouter)
app.use('/Inventory/TBD', tbdSupplierRouter)

/*Administrative Routes */
app.use('/help', helpRouter)
app.use('/newEmp', newEmpRouter)

app.use('/login/admin', adminRouter)



const port = process.env.PORT;
const server = app.listen(port, () => {
console.log(`App running on port ${port}...`);
console.log(`GamerHub CRM accessible here --> http://localhost:${port}`);
});
