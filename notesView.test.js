/**
 * @jest-environment jsdom
 */

const fs = require("fs")
const NotesView = require("./notesView")
const NotesModel = require('./notesModel');

describe("NotesView", () => {

    it("should display one note on the page", () => {
        //Arrange
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = {
            getNotes:() => {
                return ["first note", "second note"]
            },
            addNote:() => {
                
            },
            reset:() => {
                
            }
        }
        const view = new NotesView(model);
        // Act
        view.displayNotes()
        //Assert
        const noteElements = document.querySelectorAll("div.note")
        expect(noteElements.length).toBe(2);
        expect(noteElements[0].innerText).toBe("first note")
    });
    it.only("should add a note when the user types in the text box and clicks on button", () => {
        
        //Arrange
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();
        const view = new NotesView(model);
      
        // 1. Fill the input
        const input = document.querySelector('#user-input');
        input.value = 'My new amazing test note';
        // 2. Click the button
        const button = document.querySelector('#note-btn');
        button.click();

        // const input2 = document.querySelector('#user-input');
        // input2.value = 'My new amazing second test note';
        // button.click();
        
        const result = document.querySelectorAll('div.note');
        console.log(result.length);
        const div = document.querySelector("#main-container");
        console.log(div.children);
        // 3. The note should be on the page
        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
      });
    })
