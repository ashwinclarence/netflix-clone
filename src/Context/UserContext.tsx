import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/FireBaseConfig";

type UserContextType = {
  user: boolean;
  loading: boolean;
}

const UserContext = createContext<UserContextType|undefined>(undefined);

export function UserContextProvider({children}: { children: React.ReactNode;}) {
  const [user, setUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? true : false);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user,loading }}>{children}</UserContext.Provider>
  );
}

export default function userAuth() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a UserContextProvider");
  }
  return context;
}
