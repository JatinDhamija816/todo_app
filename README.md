# To-Do App
A simple To-Do application built using ReactJS, Redux for state management. This app allows users to add, view, edit, delete, and mark tasks as completed. Tasks are also saved to local storage for persistent storage.

## Features
- **Add Task**: Users can input a task into a text field and add it to the list by pressing a button.
- **View Tasks**: Display all added tasks in a list format.
- **Delete Task**: Each task has a delete button that, when clicked, removes the task from the list.
- **Edit Task**: Each task has an edit button that, when clicked, allows the user to edit the task text.
- **Mark Task as Completed**: Users can toggle a task's state to mark it as completed without deleting it.
- **Persistent Storage**: Tasks are saved to local storage, so they are not lost on page reload.

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for JavaScript apps.
- **Local Storage**: Web storage to store data persistently in the browser.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/JatinDhamija816/todo_app
2. **Install dependencies**
   ```bash
   cd todo_app
   npm install
5. **Run the Application**
    ```bash
    npm run dev
## Components
### TaskInput
A component for adding a new task. It includes a form with an input field and a button to submit the task.
### TaskList
A component for displaying the list of tasks. Each task has options to edit, delete, and mark it as completed.
## State Mangement
### Redux Slice (taskSlice.js)
Handles actions and reducers for:
- **addTask**:Adds a new task to the list.
- **deleteTask**:  Deletes a task from the list
- **toggleTask**:Toggles the completion state of a task.
- **editTask**: Edits the text of an existing task.
- **setTasks**:  Sets the initial state of tasks from local storage.
### Store (store.js)
Configures the Redux store with the tasks reducer.
