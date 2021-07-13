import NavBar from "./components/NavBar/NavBar";
import HomeIndex from "./components/HomePage/HomeIndex";
import BookContextProvider from "./components/Context/BookContext";
import { Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
