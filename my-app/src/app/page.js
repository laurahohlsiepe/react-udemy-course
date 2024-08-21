"use client"

import React from "react";
import "./Counter.css";
import { useState } from "react";
import Test from "./Test";


function Home() {
  const [toggle, updateToggle] = useState(false);

  return (
    <main>
      <div className="main">
      <div>
          <button onClick={() => 
            {updateToggle(!toggle)}}>
              Toggle
              </button>
              {toggle && <Test></Test>}
        </div>
      </div>
    </main>
  );
}

export default Home;
