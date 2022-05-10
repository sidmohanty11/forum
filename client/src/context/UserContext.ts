import { createContext } from "react";

type UserContextType = {
  userId: string | null;
  tokenIsPresent: boolean | null;
};

export const UserContext = createContext<UserContextType>({
  userId: null,
  tokenIsPresent: false,
});
