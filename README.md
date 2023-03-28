# Test driving a Model class 

Below is the specification
```js

// Model class: NotesModel
// notesModel.js
// notesModel.test.js

//Functionality
const model = new NotesModel();

model.getNotes(); // should return []

model.addNote('Buy milk');
model.addNote('Go to the gym');

model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

model.reset();

model.getNotes(); // should now return []
```