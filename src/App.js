import "./App.css";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";

function App() {
  //let title = "React Xperiments";
  // items can be added and updated auto
  let navItems = ["Home", "Projekts", "Assignments", "Info", "Counter"];

  return (
    <div>
      <h1>snap</h1>
      {/* routing implemented here */}
      <Header navItems={navItems}></Header>
      <h1>h3</h1>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}
export default App;
