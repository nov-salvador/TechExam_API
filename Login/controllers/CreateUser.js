import bcrypt from 'bcrypt';
import User from '../models/User.js';

const user = [
  {
    fullname: "Pedro Penduko",
    email: "penduko@gmail.com",
    password: "pedropendukosakalam"
  },
  {
    fullname: "Darna Bato",
    email: "darna@gmail.com",
    password: "dingangbato"
  }
]

const seedUsers = async () => {
  try {
      const salt = await bcrypt.genSalt();

      for (let userData of user) {
          const { fullname, email, password } = userData;
          const passwordHash = await bcrypt.hash(password, salt);

          const newUser = new User({
              fullname,
              email,
              password: passwordHash
          });

          await newUser.save();
      }

      console.log('Users seeded successfully');
  } catch (err) {
      console.log(err.message);
  }
};
export default seedUsers;