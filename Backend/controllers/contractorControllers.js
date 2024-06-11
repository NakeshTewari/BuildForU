const Contractor = require("../model/contractorModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password, phoneNumber } = req.body;
    console.log(username, email, password, phoneNumber);
    const usernameCheck = await Contractor.findOne({ username });
    const emailCheck = await Contractor.findOne({ email });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });

    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await Contractor.create({
      username,
      email,
      phoneNumber,
      password: hashedPass,
    });
    console.log(user);
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await Contractor.findOne({ username });
    if (!user) return res.json({ msg: "Incorrect username", status: false });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect password", status: false });

    console.log(user);

    delete user.password;

    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};
