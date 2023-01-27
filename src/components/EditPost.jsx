import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Container,
  SinglePost,
  PostTitle,
  PostDate,
  CreatorUser,
  PostContent,
  TextArea,
  SubmitButton,
  EditButton,
  PostList,
  PostTags,
} from "../components/Styles";

function EditPost() {
  // Use the useParams hook from react-router-dom to get the id from the URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Use the useQuery hook from react-query to fetch the post data
  const { data, status } = useQuery(["post", id], async () => {
    const res = await fetch(`https://dummyapi.io/data/v1/post/${id}`, {
      headers: {
        "app-id": "63d1a5c0791c456d8454bd7d",
      },
    });
    const json = await res.json();
    return json;
  });

  const { data: comments, status: commentsStatus } = useQuery(
    ["comments", id],
    async () => {
      const res = await fetch(
        `https://dummyapi.io/data/v1/post/${id}/comment`,
        {
          headers: {
            "app-id": "63d1a5c0791c456d8454bd7d",
          },
        }
      );
      const json = await res.json();
      return json;
    }
  );

  const [toggle, setToggle] = useState(true);
  const [text, setText] = useState(data.text);
  const [tags, setTags] = useState(data.tags.join(", "));

  function toggleInput() {
    setToggle(false);
  }

  function handleChange(event) {
    setText(event.target.value);
  }
  function handleChangeTags(event) {
    setTags(event.target.value);
  }

  // Use the data and status to conditionally render the post content
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error: </div>;
  }

  if (status === "success") {
    return (
      <Container>
        <SinglePost>
          <PostTitle>
            {data.owner.firstName} {data.owner.lastName}
          </PostTitle>
          <EditButton>Save Changes</EditButton>
          <PostDate>{data.publishDate}</PostDate>
          {toggle ? (
            <PostContent onClick={toggleInput}>{text}</PostContent>
          ) : (
            <input
              style={{
                fontFamily: "Roboto Condensed, sans-serif",
                width: "98%",
              }}
              type="text"
              value={text}
              onChange={handleChange}
            />
          )}
          <img src={data.image} alt={data.text} width="100%" height="100%" />
          <CreatorUser>{data.likes} 💖</CreatorUser>
          {toggle ? (
            <PostTags onClick={toggleInput}>{tags}</PostTags>
          ) : (
            <input
              style={{
                fontFamily: "Roboto Condensed, sans-serif",
                width: "98%",
              }}
              type="text"
              value={tags}
              onChange={handleChangeTags}
            />
          )}

          <PostTitle>Comments</PostTitle>
          <PostList>
            {commentsStatus === "success" &&
              comments.data.map((comment) => (
                <div key={comment.id}>
                  <PostContent>
                    <img
                      src={comment.owner.picture}
                      style={{ marginRight: "10px" }}
                      width="7%"
                      height="7%"
                    />
                    {comment.owner.firstName} {comment.owner.lastName}{" "}
                    {comment.message}
                  </PostContent>
                </div>
              ))}
          </PostList>

          <PostTitle>{data.comments}</PostTitle>
          <form>
            <TextArea></TextArea>
            <SubmitButton>Add Comment</SubmitButton>
          </form>
        </SinglePost>
      </Container>
    );
  }
}
export default EditPost;
