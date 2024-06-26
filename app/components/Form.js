"use client";

import { handleInput } from "../redux-toolkit/slices/Post-slice";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function Form() {
  const dispatch = useDispatch();
  const router = useRouter();
  const post = useSelector((state) => state.post);

  const formSubmit = (e) => {
    e.preventDefault();

    if (post.title.length > 0 && post.body.length > 0) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
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
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-10">
      <h1 className="text-xl font-bold mb-5 text-gray-700">Add Post</h1>
      <form onSubmit={formSubmit} className="mt-5">
        <div className="mb-4">
          <label
            data-name="Title"
            htmlFor="PostTitle"
            className="form-label block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="PostTitle"
            placeholder="Post Title"
            aria-describedby="Post Title"
            name="title"
            value={post.title}
            onChange={(e) => {
              dispatch(
                handleInput({
                  name: e.target.name,
                  value: e.target.value,
                })
              );
            }}
          />
        </div>

        <div className="mb-4">
          <label
            data-name="Body"
            htmlFor="Postbody"
            className="form-label block text-gray-700 text-sm font-bold mb-2"
          >
            body
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Postbody"
            placeholder="Post body"
            aria-describedby="Product body"
            name="body"
            value={post.body}
            onChange={(e) => {
              dispatch(
                handleInput({
                  name: e.target.name,
                  value: e.target.value,
                })
              );
            }}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
