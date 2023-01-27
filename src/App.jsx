import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import EditPost from "./components/EditPost";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/post/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
