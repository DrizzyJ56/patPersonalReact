import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import {Navbar, About, Home, Contact } from "./"

function RoutesMaker() {
  const [url,setUrl] = useState('')

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navbar url={url} setUrl={setUrl} />} />
        <Route path="/about" element={<Navbar url={url} setUrl={setUrl} />} />
        <Route path="/contact" element={<Navbar url={url} setUrl={setUrl} />} />
        <Route path="/kwaan" element={<Navbar url={url} setUrl={setUrl} />} />
      </Routes>
    </div>
  );
}

export default RoutesMaker;