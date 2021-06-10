# Node.js - homework

### Installation
1. Clone repo
2. Open project directory
3. run ```npm install``` command
3. run ```npm start``` command

### Task
Requirements:
* Create a simple server for “todo-checklist” application API using Node.js and whatever DB you are comfortable with (MongoDB, MySQL)
* Todo items should consist of name and description (optional) fields
* Use Express as web framework
* Use either Mongoose or Sequelize to operate on Database
* API should provide ability to perform the following actions
  * **addTodo** - to add todo task (should not be possible to add todo with the same name)
  * **removeTodo** - to remove todo item
  * **getTodos** - to get the list of todos from db
  * **markDone** - to mark todo item as completed
  * **markUndone** - to mark todo item as undone
* Request content should be validated within express middlewares
* Use joi module to validate request content
* All dependencies should be listed in package.json file.
* API resources named using REST naming convention (e.g. ‘GET /users’, ‘PUT /users/:id’ instead of ‘GET /getUsersList’, ‘PUT /updateUserById/:id’ etc.)
* Server should handle application errors and return meaningful response with appropriate HTTP status codes
* Will be a plus: API covered with tests, use Mocha or similar