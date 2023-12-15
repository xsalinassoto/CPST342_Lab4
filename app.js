//Xitlali Salinas

const express = require('express')
const dbOperations = require('./database.js');
const app = express()
const port = process.env.PORT || 3000

/**To serve static files such as images, CSS files, and JavaScript files, create a folders
* and include the below statement.  The below statement assumes that I have a folder named assets
**/
app.use(express.static('assets'))

// view engine setup
app.set("view engine", "hbs");

// parse application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Rout to  home
app.get('/', function (req, res) {
	
	dbOperations.getAllItems(res);

})

// Route to create a grocery list item
 app.post('/create_item', function (req, res) {
	//Getting body parameters
	const { item_name, item_count} =req.body;

	//Execute creatItems method
	dbOperations.createItem(item_name, item_count, res);

	
 })

 // Route that allows me to delete a grocery list item
 app.post('/delete_item', function (req, res) {
	//Getting body parameters
	const { deleterecord} = req.body;
	dbOperations.deleteItem(deleterecord, res);
	
 })

  // Route that allows me to delete a grocery list item
  app.post('/update_item', function (req, res) {
	//Getting body parameters
	const { updaterecordID} = req.body;

	dbOperations.getAItem(updaterecordID, res);
	

	//dbOperations.updateItem(updaterecordId);
	
 })

   // Route that allows me to delete a grocery list item
   app.post('/confirm_update', function (req, res) {
	//Getting body parameters
	const { itemID, item_count, item_name} = req.body;

	const updateGroceryObject = { itemID, item_count, item_name};


	dbOperations.updateItem(updateGroceryObject, res);
	//dbOperations.updateItem(updaterecordId);
	
 })

 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


