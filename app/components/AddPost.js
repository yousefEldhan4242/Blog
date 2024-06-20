"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Form from "./Form";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { handleInput } from "../redux-toolkit/slices/Post-slice";

export default function AddProducts() {
  const data = useSelector((state) => state.post);
  const dispatch = useDispatch();

  let lastId = 0;
  let lastUserID = 0;

  const router = useRouter();

  useEffect(() => {
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

  const formSubmit = (e) => {
    e.preventDefault();

    if (data.title.length > 0 && data.body.length > 0) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      Swal.fire({
        title: "Good job!",
        text: "You Created A Post",
        icon: "success",
      });
      router.push("/");
    } else {
      document.querySelectorAll(".form-label").forEach((label) => {
        if (document.getElementById(label.htmlFor).value.length == "0") {
          label.textContent = `Please, Write A Valid ${label.dataset.name}`;
          label.style.color = "red";
        }
      });
    }
  };

  return (
    <>
      <Form data={data} formSubmit={formSubmit} />
    </>
  );
}
