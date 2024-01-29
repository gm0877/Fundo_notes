import bcrypt from 'bcrypt';
import User from '../models/user.model';

// get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};


// create new user with hashed password
export const newUser = async (body) => {
  const { email, password, firstName } = body;

  // Check if the user with the same email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User with the same email already exists');
  }

  // Hashing the password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10); // Hashing password

  // Create a new user with hashed password
  const newUser = await User.create({ email, password: hashedPassword, firstName});

  // Save the new user to the database
  const data = await newUser.save();

  return data;
};

// login user
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  return user;
};

// update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

// // delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };

// get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};

