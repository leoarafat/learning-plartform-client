import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../Context/UserContext";
import { UserIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState("light");
  const storedMode = localStorage.getItem("mode");
  if (storedMode == null) {
    localStorage.setItem("mode", "light");
  }
  useEffect(() => {
    setMode(storedMode);
  }, [storedMode]);

  const handleClick = () => {
    if (storedMode == "light" || storedMode === null) {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      setMode("Light");
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>

              {user?.uid || user?.photoURL ? (
                <>
                  <li>
                    <img
                      title={user?.displayName}
                      className="w-[70px] h-[70px] rounded-[50%]"
                      src={user?.photoURL}
                      alt=""
                    />
                  </li>
                  <li>
                    <Link onClick={handleLogOut}>LogOut</Link>
                  </li>
                </>
              ) : (
                <>
                <li>
                  <Link className="btn btn-ghost normal-case text-xl">
                    <UserIcon className="w-6 h-6" />
                  </Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
              )}
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link>
                  <h2>{mode}</h2>
                  <button className={`button-${mode}`} onClick={handleClick}>
                    <input type="checkbox" className="toggle" checked />
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <Link className="btn btn-ghost normal-case text-xl">
            <ComputerDesktopIcon className="w-6 h-6" />
            Learn Program With AP
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>

            {user?.uid || user?.photoURL ? (
              <>
                <li>
                  <img
                    title={user?.displayName}
                    className="w-[70px] h-[70px] rounded-[50%]"
                    src={user?.photoURL}
                    alt=""
                  />
                </li>
                <li>
                  <Link onClick={handleLogOut}>LogOut</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="btn btn-ghost normal-case text-xl">
                    <UserIcon className="w-6 h-6" />
                  </Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link>
                <h2>{mode}</h2>
                <button className={`button-${mode}`} onClick={handleClick}>
                  <input type="checkbox" className="toggle" checked />
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex justify-evenly">
          <p>{user?.displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
