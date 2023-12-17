import React from "react";

export default function New({ user }) {
  if (!user) {
    // Handle the case where product is not available
    return <div>No product selected</div>;
  }
  return (
    <div id="user" className="d-flex m-4 ">
      <img src={user.image} alt="user" className="shadow-lg mt-5 w-25" />
      <div className="text-center">
        <p className="mt-5">
          <b>{user.title}</b>
        </p>
        <p className="mt-5">
          <u>Price :</u> {user.price}
        </p>
        <p className="mt-5 m-5">
          <u>Description : </u>
          <p>{user.description}</p>
        </p>
        <p className="mt-5">
          <u>Category:</u> {user.category}
        </p>
        <p>
          <u>Rating: </u>
        </p>
        <p>Rate: {user.rating.rate}</p>
        <div>
          <p>Count: {user.rating.count}</p>
        </div>
      </div>
    </div>
  );
}
