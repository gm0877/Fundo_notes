import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';

// /**
//  * Controller to get all Notes available
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const getAllNotes = async (req, res, next) => {
//   try {
//     const data = await NoteService.getAllNotes();
//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: data,
//       message: 'All Notes fetched successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };

/**
 * Controller to handle Note login
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const loginNote = async (req, res, next) => {
  try {
    const Note = await NoteService.loginNote(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: Note,
      message: 'Login successful'
    });
  } catch (error) {
    next(error);
  }
};

// /**
//  * Controller to get a single Note
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const getNote = async (req, res, next) => {
//   try {
//     const data = await NoteService.getNote(req.params._id);
//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: data,
//       message: 'login successful'
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// /**
//  * Controller to create a new Note
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
export const newNote = async (req, res, next) => {
  try {
    const data = await NoteService.newNote(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Note successfully created'
    });
  } catch (error) {
    next(error);
  }
};

// /**
//  * Controller to update a Note
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
// //  */
export const updateNote = async (req, res, next) => {
  try {
    const data = await NoteService.updateNote( req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Note updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// /**
//  * Controller to delete a Note
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
export const deleteNote = async (req, res, next) => {
  try {
    const del=await NoteService.deleteNote(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: del,
      message: 'Note deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};


