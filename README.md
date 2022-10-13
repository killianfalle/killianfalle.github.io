## Tools (Optional)
VSCode - Code editor

## Requirements/Ingredients
node: v17.7.2
npm: 8.5.2
git: 2.35.1

## Folder structure
This template follows a very simple project structure:

- `src (folder)`: This folder is the main container of all the code inside your application.
  - `assets (folder)`: Asset folder to store all images, styles, vectors, etc.
  - `components (folder)`: Folder to store any common component that you use through your app
  - `constants (folder)`: Folder to store any kind of constant that you have.
    - `theme (file)`: Folder to store all the styling concerns related to the application theme.
  - `navigation (folder)`: Folder to store the navigators.
  - `redux (folder)`: This folder contains all redux folders
    - `modules (folder)`: Folder to store each redux modules with actions, reducers and types
      - `{module_name}`
        - `actions (file)`: All the action files which are using around redux goes here.
        - `reducers (file)`: All the reducers which are using around redux goes here.
        - `types (file)`: All the types which are using around redux goes here.
    - `store (folder)`: Folder to put all redux middlewares and the store.
  - `screens (folder)`: Folder that contains all your application screens/features.
    - `{screen_name}`: Each screen should be stored inside its folder and inside it a file for its code.
  - `utils (folder)`: Folder to store utilities files any help functions for util functions (eg : file utils)


## Styling and Colors
Used theme variables on font sizes and colors for the entire application, which is located in `src/constants/theme.js`

## Use Functional Component as much as possible For Stateless Presentational Component
Since the Stateless Presentational Components are only dealing with only styles and UI, we should use functional components for this.
you can use Functional Components with Hooks as well that will much fewer lines of code and optimised as well.


## Keep components clean/small/readable and simple
When you .map over an array, if the child component is more than 3 lines long or contains any functions, please create a new Component in another file.

No Children components should be housed in the same file. Please ensure a new file is used.

If a button is clicked anywhere, please ensure there is instant UI reaction with some sort of indication. Use loading symbols where appropriate. If it is unclear where to add you UI feedback, ask the Jiffi team for advice.


## File Naming Convention
When Naiming files, please ensure the filename matches the component within. For example, if you are building the Dashboard Page, the file will be houred in /pages/dashboard/dashboard-page.js. Do not use index.js for component file names, this gets confusing once a job is of a substantial size.