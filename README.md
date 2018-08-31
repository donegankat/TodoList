# Todo List
### Built using .NET Core 2.1 and Angular 6

# Basics
The back-end is built in .NET Core 2.1 using Entity Framework Core and an in-memory database. It allows the user to add, edit, and complete a list of tasks on their todo list.

The front-end is built in Angular 6 and is located in the TodoList/TodoList/ClientApp folder.

## Project Structure
1) TodoList: Contains the API controller for all of the requests. The Angular 6 front-end is also in this project in the ClientApp folder.
2) TodoList.Data: Contains the database context and repository (which is not currently implemented).
3) TodoList.UnitTests: Contains the unit tests for testing the various functionalities in the project.

# Todo
- Fix the front-end so that clicking on the cancel button when editing a todo item resets your changes back to the original state.
- Separate the front-end into its own project separate from the API.
- Polish the front-end styling.
- Finish implementing the repository pattern. Currently everything operates straight out of the TodoContext.
- Add error handling and logging.
- Add additional unit tests.
