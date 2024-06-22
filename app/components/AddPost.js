"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleInput, resetPost } from "../redux-toolkit/slices/Post-slice";
import Form from "./Form";

export default function AddProducts() {
  const dispatch = useDispatch();

  let lastId = 0;
  let lastUserID = 0;

  useEffect(() => {
    // Reset The State
    dispatch(resetPost());

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.map((Post) => {
          if (Post.id > lastId) {
            lastId = Post.id;
          }
          if (Post.userId > lastUserID) {
            lastUserID = Post.userId;
          }
        });

        dispatch(
          handleInput({
            name: "id",
            value: lastId + 1,
          })
        );

        dispatch(
          handleInput({
            name: "userId",
            value: +lastUserID + 1,
          })
        );
      });
  }, []);

  return (
    <>
      <Form />
    </>
  );
}
