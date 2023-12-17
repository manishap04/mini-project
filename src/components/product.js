import React from "react";
import { Link } from "react-router-dom";
export default function Product({ user, setuser }) {
  function handleClick() {
    setuser(user);
  }
  return (
    <div className="card-body border bg-light border-primary m-4 shadow">
      <img src={user.image} alt="user" className="mt-5 mb-3 w-50" />
      <div>
        <p className="text-center m-2">
          <b>{user.title}</b>
        </p>
      </div>
      <div>
        <Link
          to={`/${user.id}`}
          id="btn-details"
          className="btn"
          onClick={handleClick}
        >
          Details
        </Link>
      </div>
    </div>
  );
}
