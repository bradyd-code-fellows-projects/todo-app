# LAB - Class 31, 32, 33, 34

## Project: Todo app

### Author: Brady Davenport

### Problem Domain

#### Phase 1: Context settings (25 Jul 2022)

Incorporate configuration settings to the application. In this phase, we’ll be adding some top-level settings for the application, so that the user can make some display choices that the app will use by default.

##### Phase 1 Feature Tasks

- Style the application using the Blueprint Component API{target:_blank}
- Properly modularize the application into separate components
- Implement the Context API to make some basic application settings available to components
  - How many To Do Items to show at once
  - Whether or not to show completed items

#### Phase 2: Context API - Behaviors (26 Jul 2022)

Incorporate configuration settings to the application. In this phase, we’ll be adding an editor so that users can save their preferences for the application, allowing them to change some of the default behaviors

##### Phase 2 Feature Tasks

- Implement the Context API to make some basic application settings available to components
  - How many To Do Items to show at once
  - Whether or not to show completed items
- Provide the users with a form where they can change the values for those settings
  - This should be given in the form of a new component, perhaps linked to from the main navigation
  - Hint: Use Browser Router to create the page/route/component for this
- Save the users choices in Local Storage
- Retrieve their preferences from Local Storage and apply them to the application on startup

#### Phase 3: `<Login />` and `<Auth />` (27 Jul 2022)

Adding security and access controls to the application.

In this final phase, we’ll be requiring that users be logged in, in order to see the to do items. Additionally, based on their user type, they will be allowed (or denied) to perform actions such as editing or deleting them.

##### Phase 3 Feature Tasks

- As a user, I want to provide a way for other users to create new accounts
- As a user, I want to provide a way for all users to login to their account
- As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
- As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items
- As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete
- As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items

#### Phase 4: API Integration (28 July 2022)

#### Phase 4 Feature Tasks

- Require users be logged in through a live authentication server in order to see to-do items
- Based on user type, user will be allowed (or denied) to perform actions such as editing or deleting items
- To-dos will be stored in a database and access via deployed API

### Links and Resources

- [GitHub Repo](https://github.com/bradydavenport/todo-app)
- [CodeSandbox](https://codesandbox.io/s/todo-app-0ktjiq)

![UML](/public/img/uml.jpg)

### How to use

### Setup
