import express from 'express';
import * as NoteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { NoteAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all Notes
//router.get('', NoteController.getAllNotes);

//route to create a new Note
router.post('', newNoteValidator, NoteController.newNote);

 //route to get a single Note by their Note id
 router.post('/read', NoteController.readNote);

// //route to update a single Note by their Note id
router.patch('/update', NoteController.updateNote);

// // //route to delete a single Note by their Note id
router.delete('/delete', NoteController.deleteNote);

export default router;




