import express from 'express';
import * as NoteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { NoteAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all Notes
//router.get('', NoteController.getAllNotes);

//route to create a new Note
router.post('/create', newNoteValidator, NoteController.newNote);

 //route to get a single Note by their Note id
 router.get('/read/:_id', NoteController.readNote);

// //route to update a single Note by their Note id
router.patch('/update/:_id', NoteController.updateNote);

// // //route to delete a single Note by their Note id
router.delete('/delete/:_id', NoteController.deleteNote);

export default router;




