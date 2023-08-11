import userSchema from "../model/User.js";

export const signup = async (req, res) => {
  try {
    console.log(req.body);

    const { email, lastname, firstname, password, confirmPassword, image } =
      req.body;

    const userFound = await userSchema.findOne({ email });
    if (userFound)
      return res.send({
        message: "Email id is already register",
        alert: false,
      });

    const user = new userSchema(req.body);
    const userSave = await user.save();
    console.log(userSave);
    res.send({ message: "Successfully signup", alert: true });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await userSchema.findOne({ email });
    if (!userFound) res.send({ message: "User not found", alert: false });

    res.send({
      message: "Login is successfully",
      alert: true,
      data: userFound,
    });

    console.log(userFound);
  } catch (error) {
    console.log(error);
  }
};
