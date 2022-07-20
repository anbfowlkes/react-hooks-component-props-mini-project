import React from "react";
import Header from './Header';
import About from './About'
import blogData from "../data/blog";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name}/>
      <About image={blogData.image}/>
    </div>
  );
}

export default App;
