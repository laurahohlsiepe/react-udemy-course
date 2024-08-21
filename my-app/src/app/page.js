"use client"

import React from "react";
import "./Counter.css";
import { useState } from "react";
import Header from "./Components/Header";
import Test from "./Test";
import Counter from "./Components/Counter";
import TestConditional from "@/TestConditional";


function Home() {
  const [toggle, updateToggle] = useState(false);

  return (
    <main>
      <div className="main">
        <Header />
      <div>
          <button onClick={() => 
            {updateToggle(!toggle)}}>
              Toggle
              </button>
              {toggle && <Test></Test>}
        </div>  
          <Counter />
      </div>
    </main>
  );
}

export default Home;
