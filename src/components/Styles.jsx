import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const SinglePost = styled.div`
  border: 1px solid ${(props) => (props.selected ? "#7286D3" : "#E5E0FF")};
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 400px;
  margin-left: 400px;
  border-radius: 25px;
  text-align: left;
  @media (max-width: 600px) {
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;
  }
`;

const PostTitle = styled.h3`
  margin: 0;
  font-family: "Roboto Condensed", sans-serif;
  color: #7286d3;
  margin-top: 10px;
`;

const AddItem = styled.h3`
  margin: 0;
  font-family: "Roboto Condensed", sans-serif;
  color: #faab78;
`;

const PostDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  margin-bottom: 10px;
  font-family: "Roboto Condensed", sans-serif;
  display: block;
`;

const PostDate = styled.div`
  margin-right: 10px;
  margin-top: 20px;
  font-size: 0.8em;
  font-family: "Roboto Condensed", sans-serif;
`;

const CreatorUser = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  font-family: "Roboto Condensed", sans-serif;
`;

const PostTags = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 0.9em;
`;

const PostContent = styled.div`
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1em;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  background: transparent;
  border: none;
  color: #f48484;
  cursor: pointer;
  font-size: 1em;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const PostModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px #ccc;
  z-index: 1;
`;

const TextArea = styled.textarea`
  outline: none;
  border-radius: 20px;
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  padding: 8px;
  padding-bottom: 24px;
  box-shadow: 0 0 0 1px #fdebed;
  &:focus {
    box-shadow: 0 0 0 2px #c3acd0;
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  background: transparent;
  border: none;
  color: #f48484;
  cursor: pointer;
  font-size: 1em;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const EditButton = styled.button`
  margin-top: 20px;
  background: transparent;
  border: none;
  color: #f48484;
  cursor: pointer;
  font-size: 1em;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;

export {
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
  TextArea,
  SubmitButton,
  EditButton,
  AddItem,
};
