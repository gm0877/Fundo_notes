import Note from '../models/note.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

// create new note
export const newNote = async (body) => {
    const data = await Note.create(body);
    return data;
  };

// login
export const loginNote = async (body) => {
  // Finding the note with the given title
  const note = await Note.findOne({ title: body.title  });
  return note;
};
//update

export const updateNote = async (body) => {
    // Finding the note with the given title
    const upda = await Note.findOneAndUpdate({ title: body.title }, {description:body.description}, { new: true });
    return upda;
  };

  //delete
  // delete note
export const deleteNote = async (body) => {
    // Finding the note with the given title and deleting it
    const delnote = await Note.findOneAndDelete({ title:body.title});
    return delnote;
  };
  
  
  