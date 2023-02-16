const bcrypt = require("bcrypt");

const UserValidationSchema = require("../helpers/validation/user");
const UserModel = require("../models/user");

module.exports = {
  validateRequestBody: async (body) => {
    await UserValidationSchema.validateAsync(body);
    // using Joi user schema to validate the request body.
  },
  registerUser: async (body) => {
    // 1. Check the email doesn't already exist
    if (await UserModel.findOne({ email: body.email })) {
      // will be null if not found
      const err = new Error(
        `A user with the email "${body.email}" already exists.`
      );
      err.status = 400; // it's the user's fault.
      throw err;
    }

    // 2. Hash the password
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const userInstance = await UserModel.create({
      email: body.email,
      name: body.name,
      password: hashedPassword
    });

    // redact password from confirmation object
    userInstance.password = "*********";

    return userInstance;
  },
};
