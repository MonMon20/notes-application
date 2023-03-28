const NotesModel = require("./notesModel");

describe("NotesModel", () => {
    it("should return an empty list(array)",() => {
        const model = new NotesModel()
        expect(model.getNotes()).toEqual([]);
    });
    it("should add notes(items) to the list(array)",() => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    });
    it("should clear/reset the list(array)",() => {
        const model = new NotesModel();
        model.reset();
        expect(model.getNotes()).toEqual([])
    });
});