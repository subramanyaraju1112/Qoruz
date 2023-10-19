/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from 'react';

// Define the type for user data
type UserData = {
  name: string;
  email: string;
};

// Create the initial context
const UserContext = createContext<{
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
}>({
  userData: { name: 'a', email: 'b' },
  setUserData: () => {},
});

// Create the UserProvider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData | null>({
    name: 'a',
    email: 'b',
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

export const useUser = () => useContext(UserContext);
