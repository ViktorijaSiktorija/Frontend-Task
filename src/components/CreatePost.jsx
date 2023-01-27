import React, { useState } from "react";
import { useMutation } from "react-query";

function CreatePost() {
  const [formData, setFormData] = useState({
    owner: {
      firstName: "",
      lastName: "",
    },
    post: {
      text: "",
    },
  });

  const [createPost, { status, error }] = useMutation(
    async ({ owner, post }) => {
      const res = await fetch("https://dummyapi.io/data/v1/post/create", {
        method: "POST",
        headers: {
          "app-id": "63d1a5c0791c456d8454bd7d",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ owner, post }),
      });
      return res.json();
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const { owner, post } = formData;
    createPost({ owner, post });
  };

  const handleFirstNameChange = (event) => {
    setFormData({
      ...formData,
      owner: {
        ...formData.owner,
        firstName: event.target.value,
      },
    });
  };
  const handleLastNameChange = (event) => {
    setFormData({
      ...formData,
      owner: {
        ...formData.owner,
        lastName: event.target.value,
      },
    });
  };
  const handlePostChange = (event) => {
    setFormData({
      ...formData,
      post: {
        text: event.target.value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="Name"
        onChange={handleFirstNameChange}
        value={formData.owner.firstName}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleLastNameChange}
        value={formData.owner.lastName}
        required
      />
      <textarea
        name="post"
        placeholder="Post text"
        onChange={handlePostChange}
        value={formData.post.text}
        required
      ></textarea>
      <button type="submit">Create Post</button>
      {status === "loading" && <p>Creating post...</p>}
      {status === "error" && <p>Error: {error.message}</p>}
      {status === "success" && <p>Post created successfully!</p>}
    </form>
  );
}

export default CreatePost;
