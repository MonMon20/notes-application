class NotesView {
    constructor(model) {
        this.model = model;
        this.addNoteButton = document.querySelector("#note-btn");
        
        this.addNoteButton.addEventListener("click",() => {
            const newNote = document.querySelector("#user-input").value;
            console.log("New note = ",newNote);
            this.addNewNote(newNote);
        });
    }
    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes();
    }
    displayNotes() {
        this.model.getNotes().forEach(note => {
            const newElement = document.createElement("div");
            newElement.className = "note";
            newElement.textContent = note;
            
            const mainContainer = document.querySelector("#main-container");
            mainContainer.append(newElement);
            console.log("main container text = ", mainContainer.innerHTML);
            console.log("note variable =", note);
        });
    }
}

module.exports = NotesView;