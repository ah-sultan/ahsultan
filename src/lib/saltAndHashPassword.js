const bcrypt = require("bcryptjs");

export const saltAndHashPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return { hash, salt };
};
