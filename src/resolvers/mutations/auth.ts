import { Context } from "../../types";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import { JWT_SECRET } from "../../keys";

interface CredsType {
  email: string;
  password: string;
}

interface SignupArgs {
  credentials: CredsType;
  name: string;
  bio: string;
  regNo: string;
}

interface SignInArgs {
  credentials: CredsType;
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
    { credentials: { email, password }, name, bio, regNo }: SignupArgs,
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

    await prisma.profile.create({
      data: {
        bio,
        regNo,
        userId: user.id,
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
  signin: async (
    _: any,
    { credentials: { email, password } }: SignInArgs,
    { prisma }: Context
  ): Promise<UserPayload> => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return {
        userErrors: [
          {
            message: "Invalid email or password",
          },
        ],
        token: null,
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return {
        userErrors: [
          {
            message: "Invalid email or password",
          },
        ],
        token: null,
      };
    }

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
