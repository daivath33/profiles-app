import axios from "axios";
import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkUserCredentials } from "../utils/user";
import { LOGIN_ROUTE } from "../routes/const";
import { getUsers, registerUser, updateUser } from "../api/users";

const UserContext = createContext({
  user: null,
  isLoggedIn: false,
  handleLogin: () => null,
  handleLogout: () => null,
  handleRegister: () => null,
  handleUpdateUser: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))); // null | {username: "test", password: "asd123"}
  const isLoggedIn = !!user; // null | {username: "test", password: "asd123"}
  //* !!null => false
  //* !!{username: "test", password: "asd123"} => true
  const navigate = useNavigate();

  // useEffect(() => {
  //   const localStorageUser = JSON.parse(localStorage.getItem("user"));
  //   if (localStorageUser) {
  //     setUser(localStorageUser);
  //   }
  // }, []);

  const handleLogin = (user, setError) => {
    getUsers()
      .then((response) => {
        const existingUser = checkUserCredentials(response, user);
        if (existingUser) {
          setUser(existingUser);
          localStorage.setItem("user", JSON.stringify(existingUser));
        } else {
          setError("User email or password is incorrect.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("user", null);
    navigate(LOGIN_ROUTE);
  };

  const handleRegister = (newUser) => {
    registerUser(newUser)
      .then(() => {
        navigate(LOGIN_ROUTE);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateUser = (updatingUser) => {
    axios
      .put(`http://localhost:3000/users/${user.id}`, updatingUser)
      .then((resp) => resp.data)
      .then((response) => {
        setUser(response);
        localStorage.setItem("user", JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        handleLogin,
        handleLogout,
        handleRegister,
        handleUpdateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
