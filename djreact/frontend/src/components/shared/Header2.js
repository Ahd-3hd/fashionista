import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";
export default function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const authLinks = (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
    </ul>
  );
  return <div>{auth.isAuthenticated ? authLinks : guestLinks}</div>;
}
