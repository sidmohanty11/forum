import { Context } from "../../types";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import { JWT_SECRET } from "../../keys";

interface SignupArgs {
  email: string;
  name: string;
  password: string;
  bio: string;
  regNo: string;
}

interface UserPayload {
  userErrors: {
    message: string;
  }[];
  token: string | null;
}

export const authResolvers = {
  signup: async (
    _: any,
    { email, name, password, bio, regNo }: SignupArgs,
    { prisma }: Context
  ): Promise<UserPayload> => {
    const isEmail = validator.isEmail(email);

    if (!isEmail) {
      return {
        userErrors: [
          {
            message: "Invalid Email",
          },
        ],
        token: null,
      };
    }

    const isValidPassword = validator.isStrongPassword(password);

    if (!isValidPassword) {
      return {
        userErrors: [
          {
            message: "Provide a strong password",
          },
        ],
        token: null,
      };
    }

    if (!name || !bio || !regNo) {
      return {
        userErrors: [
          {
            message: "Please provide all the inputs",
          },
        ],
        token: null,
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    const token = JWT.sign(
      {
        userId: user.id,
      },
      JWT_SECRET,
      {
        expiresIn: 3600000,
      }
    );

    return {
      userErrors: [],
      token,
    };
  },
};
