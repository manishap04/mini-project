import React from "react";
import Product from "./product";

export default function Home({ users, setuser }) {
  let [search, setSearch] = React.useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="text-center bg-light">
      <h1 className="text-primary">Shopping</h1>
      <input
        type="search"
        className="w-25"
        id="title"
        placeholder="search title"
        onChange={handleSearch}
      />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 m-3">
        {users
          .filter((user) =>
            user.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <div className="col" key={user.id}>
              <Product user={user} setuser={setuser} />
            </div>
          ))}
      </div>
    </div>
  );
}
