import React, { useState } from "react";
import { useQuery } from "react-query";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  Container,
  SinglePost,
  PostList,
  PostTitle,
  PostDetails,
  PostDate,
  CreatorUser,
  PostTags,
  PostContent,
  CloseButton,
  PostModal,
  AddItem,
} from "../components/Styles";

const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery("posts", async () => {
    const res = await fetch(
      "https://dummyapi.io/data/v1/post?page=1&limit=10",
      {
        headers: {
          "app-id": "63d1a5c0791c456d8454bd7d",
        },
      }
    );
    const json = await res.json();
    return json.data;
  });

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <SinglePost onClick={() => navigate(`/post/create`)}>
        <AddItem>
          <FaPlus /> Add New Post
        </AddItem>
      </SinglePost>
      <PostList>
        {posts.map((post) => (
          <SinglePost
            key={post.id}
            onClick={() => handlePostClick(post)}
            selected={post === selectedPost}
          >
            <PostTitle>{post.owner.firstName}</PostTitle>
            <PostDetails>
              <PostDate>{post.publishDate}</PostDate>
            </PostDetails>
            <PostContent>{post.text.substring(0, 100)}...</PostContent>
            <PostTags>{post.tags.join(", ")}</PostTags>
          </SinglePost>
        ))}
      </PostList>
      {selectedPost && (
        <PostModal>
          <PostTitle>
            {selectedPost.owner.firstName} {selectedPost.owner.lastName}
          </PostTitle>
          <PostDetails>
            <PostDate>{selectedPost.publishDate}</PostDate>
            <CreatorUser>{selectedPost.likes} 💖</CreatorUser>
            <PostTags>{selectedPost.tags.join(", ")}</PostTags>
          </PostDetails>
          <img
            src={selectedPost.image}
            alt={selectedPost.text}
            style={{
              maxWidth: "200px",
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />
          <PostContent>{selectedPost.text}</PostContent>
          <CloseButton onClick={() => setSelectedPost(null)}>Close</CloseButton>
        </PostModal>
      )}
    </Container>
  );
};

export default Home;
