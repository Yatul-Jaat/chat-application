import bcrypt, { compareSync } from "bcrypt";
import User from "../models/user.model.js";
import mailSender from "../mail/auth.mail.js";
import genetrateTokenandCokkies from "../utils/generateToken.js";

const signup = async (req, res) => {
  try {
    const { username, Name, Email, password, confirmPassword } = req.body;

    if (confirmPassword !== password) {
      return res.status(401).json({ error: "password dosen't match..." });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(401).json({ error: "usr already exists..." });
    }

    const hashesPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      username,
      Name,
      Email,
      password: hashesPassword,
    });

    if (newUser) {
      genetrateTokenandCokkies(newUser._id,res)
      await newUser.save();
      res.status(201).json(newUser);
      mailSender(Email, Name);
    } else {
      res.status(401).json({ error: "user error..." });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    const comparePass = compareSync(password, user.password);

    if (user && comparePass) {
      genetrateTokenandCokkies(user._id,res)
      return res.status(201).json(user);
    } else {
      return res.status(401).json({ error: "user dosen't exists..." });
    }
  } catch (error) {
    res.status(401).json({ error: error });
  }
};


const Logout=async(req,res)=>{
  try {
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(401).json(error)
  }
}

export { signup, login,Logout };
