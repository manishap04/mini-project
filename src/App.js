import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import New from "./components/newpage";
import Home from "./components/home";
export default function App() {
  let [users, setusers] = useState([]);
  let [user, setuser] = useState();

  useEffect(() => {
    async function fetchProducts() {
      try {
        let prods = await fetch("https://fakestoreapi.com/products");
        prods = await prods.json();
        setusers(prods);
      } catch (error) {
        console.error("Error fetching: ", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home users={users} setuser={setuser} />} />
          <Route path="/:productId" element={<New user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

