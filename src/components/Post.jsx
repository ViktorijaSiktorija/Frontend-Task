import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Container,
  SinglePost,
  PostTitle,
  PostDate,
  CreatorUser,
  PostTags,
  PostContent,
  TextArea,
  SubmitButton,
  EditButton,
  PostList,
} from "../components/Styles";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

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
          <EditButton onClick={() => navigate(`/post/${id}/edit`)}>
            Edit Post
          </EditButton>
          <PostDate>{data.publishDate}</PostDate>
          <PostContent>{data.text}</PostContent>
          <img src={data.image} alt={data.text} width="100%" height="100%" />
          <CreatorUser>{data.likes} 💖</CreatorUser>
          <PostTags>{data.tags.join(", ")}</PostTags>
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
            <TextArea />
            <SubmitButton>Add Comment</SubmitButton>
          </form>
        </SinglePost>
      </Container>
    );
  }
}

export default Post;
